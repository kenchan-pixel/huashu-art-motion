"""Traditional Chinese fontsets: render and QA must apply the same fonts; QA output stays UTF-8."""
import ast
import builtins
import json
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
SCRIPTS = ('scripts/engine/render.py', 'scripts/qa.py')


def tree(relative):
    return ast.parse((ROOT / relative).read_text(encoding='utf-8'))


def source(relative):
    return (ROOT / relative).read_text(encoding='utf-8')


class FontsetContractTests(unittest.TestCase):
    def test_render_and_qa_accept_and_apply_the_same_fontset(self):
        for relative in SCRIPTS:
            with self.subTest(script=relative):
                args = [n.args[0].value for n in ast.walk(tree(relative))
                        if isinstance(n, ast.Call) and getattr(n.func, 'attr', '') == 'add_argument'
                        and n.args and isinstance(n.args[0], ast.Constant)]
                self.assertIn('--fontset', args)
                text = source(relative)
                self.assertIn("spec['fontset'] = a.fontset", text)          # spec mode
                self.assertIn("&fontset={a.fontset}", text)                  # full-film mode (index.html query)

    @unittest.skipUnless(shutil.which('node'), 'node not installed')
    def test_fontsets_swap_simplified_slots_to_existing_traditional_files(self):
        script = r"""
const fs = require('fs'), vm = require('vm'), path = require('path');
const engine = process.argv[1], ctx = {}; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(engine, 'lib/fonts.js'), 'utf8'), ctx);
const fresh = () => { const c = { }; c.window = c; vm.createContext(c);
  vm.runInContext(fs.readFileSync(path.join(engine, 'lib/fonts.js'), 'utf8'), c); return c; };
const out = {};
for (const name of Object.keys(ctx.FONTSETS)) {
  const c = fresh(); c.applyFontset(name);
  out[name] = Object.fromEntries(c.FONT_FACES.map(f => [f.family, f.url]));
}
const c = fresh(); c.applyFontset(null); out.none = Object.fromEntries(c.FONT_FACES.map(f => [f.family, f.url]));
try { fresh().applyFontset('nope'); out.unknown = 'accepted'; } catch (e) { out.unknown = 'rejected'; }
console.log(JSON.stringify(out));
"""
        engine = ROOT / 'scripts/engine'
        res = subprocess.run(['node', '-e', script, str(engine)], capture_output=True, text=True, encoding='utf-8')
        self.assertEqual(res.returncode, 0, res.stderr)
        out = json.loads(res.stdout)
        self.assertEqual(out['unknown'], 'rejected')
        self.assertEqual(out['none']['LXGWWenKai-500'], 'lib/fonts/LXGWWenKai-500.woff')   # default unchanged
        expect = {'tc': ('LXGWWenKaiTC-500', 'NotoSansHK-700'),
                  'tc-kids': ('Huninn-400', 'Huninn-400'),
                  'tc-info': ('NotoSansHK-500', 'NotoSansHK-700')}
        for name, (hand, bold) in expect.items():
            with self.subTest(fontset=name):
                urls = out[name]
                self.assertEqual(urls['LXGWWenKai-500'], f'lib/fonts/{hand}.woff')
                self.assertEqual(urls['PuHui-Bold'], f'lib/fonts/{bold}.woff')
                for url in urls.values():
                    self.assertTrue((engine / url).exists(), url)


class Utf8OutputTests(unittest.TestCase):
    def test_qa_json_export_is_utf8_under_a_cp950_default(self):
        """Run qa.py's actual qa.json export with open() defaulting to cp950 (zh-Hant Windows)."""
        node = next(n for n in tree('scripts/qa.py').body
                    if isinstance(n, (ast.With, ast.Expr)) and 'json.dump(' in ast.unparse(n) and 'qa.json' in ast.unparse(n))

        def cp950_open(file, mode='r', *args, encoding=None, **kw):
            return builtins.open(file, mode, *args, encoding=encoding or ('cp950' if 'b' not in mode else None), **kw)

        report = {'framing': '叠字', 'path': 'C:/片/㗎'}   # neither encodes in cp950
        with tempfile.TemporaryDirectory() as directory:
            namespace = {'json': json, 'out': Path(directory), 'report': report, 'open': cp950_open}
            exec(compile(ast.Module(body=[node], type_ignores=[]), 'qa.py', 'exec'), namespace)
            self.assertEqual(json.loads(Path(directory, 'qa.json').read_text(encoding='utf-8')), report)

    def test_text_file_io_names_an_encoding(self):
        for relative in SCRIPTS + ('scripts/font_subset.py',):
            for n in ast.walk(tree(relative)):
                if not isinstance(n, ast.Call):
                    continue
                name = getattr(n.func, 'attr', getattr(n.func, 'id', ''))
                keys = {k.arg for k in n.keywords}
                if name in ('read_text', 'write_text') or (name == 'open' and isinstance(n.func, ast.Name) and
                                                           not any(isinstance(a, ast.Constant) and 'b' in str(a.value) for a in n.args[1:])):
                    with self.subTest(script=relative, line=n.lineno):
                        self.assertIn('encoding', keys)


if __name__ == '__main__':
    unittest.main()

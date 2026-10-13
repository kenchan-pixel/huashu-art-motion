// 每个字体文件注册成独立 family（文件名去扩展名），用法：ctx.font = '96px "Cinzel-700"'
window.FONT_FACES = [
  {family:'Cinzel-400', url:'lib/fonts/Cinzel-400.woff'},
  {family:'Cinzel-700', url:'lib/fonts/Cinzel-700.woff'},
  {family:'CormorantGaramond-500i', url:'lib/fonts/CormorantGaramond-500i.woff'},
  {family:'CormorantGaramond-500', url:'lib/fonts/CormorantGaramond-500.woff'},
  {family:'CormorantGaramond-700', url:'lib/fonts/CormorantGaramond-700.woff'},
  {family:'EBGaramond-400i', url:'lib/fonts/EBGaramond-400i.woff'},
  {family:'EBGaramond-400', url:'lib/fonts/EBGaramond-400.woff'},
  {family:'EBGaramond-600', url:'lib/fonts/EBGaramond-600.woff'},
  {family:'IMFellEnglish-400i', url:'lib/fonts/IMFellEnglish-400i.woff'},
  {family:'IMFellEnglish-400', url:'lib/fonts/IMFellEnglish-400.woff'},
  {family:'PlayfairDisplay-400i', url:'lib/fonts/PlayfairDisplay-400i.woff'},
  {family:'PlayfairDisplay-700i', url:'lib/fonts/PlayfairDisplay-700i.woff'},
  {family:'PlayfairDisplay-700', url:'lib/fonts/PlayfairDisplay-700.woff'},
  {family:'PressStart2P-400', url:'lib/fonts/PressStart2P-400.woff'},
  {family:'Poppins-600', url:'lib/fonts/Poppins-600.woff'},
  {family:'Poppins-700', url:'lib/fonts/Poppins-700.woff'},
  {family:'Poppins-800', url:'lib/fonts/Poppins-800.woff'},
  {family:'JosefinSans-700', url:'lib/fonts/JosefinSans-700.woff'},
  {family:'Bangers-400', url:'lib/fonts/Bangers-400.woff'},
  {family:'GochiHand-400', url:'lib/fonts/GochiHand-400.woff'},
  {family:'Caveat-600', url:'lib/fonts/Caveat-600.woff'},
  {family:'LilitaOne-400', url:'lib/fonts/LilitaOne-400.woff'},
  {family:'NotoSerifJP-600', url:'lib/fonts/NotoSerifJP-600.woff'},
  {family:'Exo2-800i', url:'lib/fonts/Exo2-800i.woff'},
  {family:'ArchivoBlack-400', url:'lib/fonts/ArchivoBlack-400.woff'},
  {family:'Kalam-700', url:'lib/fonts/Kalam-700.woff'},
  {family:'UnifrakturMaguntia-400', url:'lib/fonts/UnifrakturMaguntia-400.woff'},
  {family:'Marcellus-400', url:'lib/fonts/Marcellus-400.woff'},
  {family:'Righteous-400', url:'lib/fonts/Righteous-400.woff'},
  {family:'Anton-400', url:'lib/fonts/Anton-400.woff'},
  {family:'AlfaSlabOne-400', url:'lib/fonts/AlfaSlabOne-400.woff'},
  {family:'Rye-400', url:'lib/fonts/Rye-400.woff'},
  {family:'LibreBaskerville-400', url:'lib/fonts/LibreBaskerville-400.woff'},
  {family:'LibreBaskerville-700', url:'lib/fonts/LibreBaskerville-700.woff'},
  // 中文：霞鹜文楷 Medium 子集（OFL 1.1）。GB2312 全部汉字＋预置字＋skill 里用到的字（font_subset.py --gb2312），生僻字用 scripts/font_subset.py --text 补；NotoSerifJP 是日文子集，简体字不全（「戏」「蓝」都没有）
  {family:'LXGWWenKai-500', url:'lib/fonts/LXGWWenKai-500.woff'},
  // ---- YouTube 解说语法（references/09）----
  // 中文黑体：family 名沿用 PuHui-*（代码里 97 处引用不用改），开源版文件是思源黑体 Noto Sans SC（OFL 1.1）500/700/800/900 四个字重的 GB2312 子集
  // （scripts/font_subset.py --gb2312，单字重约 1.4MB）。作者原用阿里巴巴普惠体 3.0，其许可不允许转换、拆分后再分发，所以不随仓库附带；
  // 你自己装了普惠体想换回去：按 font_subset.py 说明生成 PuHui-*.woff，把下面四行的 url 改回去即可。
  {family:'PuHui-Medium', url:'lib/fonts/NotoSansSC-500.woff'},
  {family:'PuHui-Bold', url:'lib/fonts/NotoSansSC-700.woff'},
  {family:'PuHui-Heavy', url:'lib/fonts/NotoSansSC-800.woff'},
  {family:'PuHui-Black', url:'lib/fonts/NotoSansSC-900.woff'},
  // 3b1b 公式：CMU（LaTeX Computer Modern）正体/斜体
  {family:'CMU-rm', url:'lib/fonts/cmunrm.woff'},
  {family:'CMU-it', url:'lib/fonts/cmunti.woff'},
  // 发布会 Inter（SF Pro 最接近的开源字）、财经 Roboto Condensed：可变字重，用 '600 220px "Inter"' 选字重
  {family:'Inter', url:'lib/fonts/Inter-var.woff', desc:{weight:'100 900'}},
  {family:'RobotoCondensed', url:'lib/fonts/RobotoCondensed-var.woff', desc:{weight:'100 900'}},
  // 思源黑/宋（可变字重）：只含 3b1b/发布会/财经三支示范片用到的字（源文件未随仓库附带，换题目缺字时改用 PuHui-*，或下 Google Fonts 的 NotoSansSC[wght].ttf 重做子集）
  {family:'NotoSansSC', url:'lib/fonts/NotoSansSC-sub.woff', desc:{weight:'100 900'}},
  {family:'NotoSerifSC', url:'lib/fonts/NotoSerifSC-sub.woff', desc:{weight:'200 900'}},
  // ---- 繁体中文（港台）：Big5 常用字 5401＋粤语常用字子集（font_subset.py --big5），OFL 1.1 ----
  {family:'LXGWWenKaiTC-500', url:'lib/fonts/LXGWWenKaiTC-500.woff'},
  {family:'Huninn-400', url:'lib/fonts/Huninn-400.woff'},
  {family:'NotoSansHK-500', url:'lib/fonts/NotoSansHK-500.woff'},
  {family:'NotoSansHK-700', url:'lib/fonts/NotoSansHK-700.woff'},
  {family:'NotoSansHK-800', url:'lib/fonts/NotoSansHK-800.woff'},
  {family:'NotoSansHK-900', url:'lib/fonts/NotoSansHK-900.woff'},
  {family:'NotoSansHK', url:'lib/fonts/NotoSansHK-var.woff', desc:{weight:'100 900'}},
];

// 繁体字库组（spec.fontset 或 render.py --fontset）：把简体字体的「位子」换成繁体文件，family 名不变，所以 clips/、lib/ 里的引用一行都不用改。
// 按内容选：tc＝手写／叙事解说（霞鹜文楷 TC＋思源黑体 HK，默认）；tc-kids＝儿童科普（全部 jf 粉圆）；tc-info＝数据、图表、发布会、手机小字（全部思源黑体 HK，港式字形）。
// 宋体位 NotoSerifSC 暂无繁体对应，保留原文件，缺字会照常告警。
window.FONTSETS = (() => {
  const sans = { 'PuHui-Medium': 'NotoSansHK-500', 'PuHui-Bold': 'NotoSansHK-700', 'PuHui-Heavy': 'NotoSansHK-800', 'PuHui-Black': 'NotoSansHK-900', 'NotoSansSC': 'NotoSansHK' };
  const all = to => Object.fromEntries(['LXGWWenKai-500', 'PuHui-Medium', 'PuHui-Bold', 'PuHui-Heavy', 'PuHui-Black', 'NotoSansSC'].map(k => [k, to]));
  return {
    'tc': { 'LXGWWenKai-500': 'LXGWWenKaiTC-500', ...sans },
    'tc-kids': all('Huninn-400'),
    'tc-info': { 'LXGWWenKai-500': 'NotoSansHK-500', ...sans },
  };
})();
window.applyFontset = name => {
  if (!name) return;
  const map = window.FONTSETS[name];
  if (!map) throw new Error(`没有这个 fontset：${name}（可用：${Object.keys(window.FONTSETS).join(' ')}）`);
  const byFamily = Object.fromEntries(FONT_FACES.map(f => [f.family, f]));
  for (const f of FONT_FACES) { const to = byFamily[map[f.family]]; if (to) { f.url = to.url; f.desc = to.desc; } }
};

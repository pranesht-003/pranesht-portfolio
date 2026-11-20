const fs = require('node:fs');
const path = require('node:path');
const esbuild = require('esbuild');
const { compile } = require('tailwindcss');

async function build() {
  const root = path.resolve(process.env.PORTFOLIO_SOURCE || 'src/cinema');
  const output = path.resolve(process.env.PORTFOLIO_OUTPUT || '.');
  const jsDir = path.join(output, 'Assets/JS');
  const cssDir = path.join(output, 'Assets/CSS');
  fs.mkdirSync(jsDir, {recursive:true});
  fs.mkdirSync(cssDir, {recursive:true});
  const options = {
    entryPoints: [path.join(root, 'main.tsx')], bundle: true, minify: true,
    jsx: 'automatic', loader: {'.png':'dataurl','.css':'empty'},
    nodePaths: (process.env.NODE_PATH || '').split(path.delimiter).filter(Boolean),
    define: {'process.env.NODE_ENV':'"production"'}, outfile: path.join(jsDir,'cinema.js')
  };
  await esbuild.build(options);
  const theme = path.dirname(require.resolve('tailwindcss/package.json'));
  const css = await compile('@layer theme, base, components, utilities;\n' +
    ['theme','preflight','utilities'].map((file,i) => '@layer '+['theme','base','utilities'][i]+'{'+fs.readFileSync(path.join(theme,file+'.css'),'utf8')+'}').join('\n'));
  const components = path.join(root,'components');
  const tokens = new Set();
  for (const file of fs.readdirSync(components).filter(name => name.endsWith('.tsx')).concat('../App.tsx')) {
    for (const token of fs.readFileSync(path.join(components,file),'utf8').split(/[\s"'`<>={}]+/)) tokens.add(token);
  }
  const extra = path.join(root,'site.css');
  fs.writeFileSync(path.join(cssDir,'cinema.css'), css.build([...tokens])+'\n'+(fs.existsSync(extra)?fs.readFileSync(extra,'utf8'):'body{margin:0;background:black}'));
}
build().catch(error => { console.error(error); process.exitCode = 1; });

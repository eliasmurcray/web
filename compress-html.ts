const fs = require('fs');
const { minify } = require('html-minifier');

const htmlFiles = [
  'index'
].map(n=>`./dist/${n}.html`);

htmlFiles.forEach((file) => {
  const html = fs.readFileSync(file, 'utf8');
  const compressedHtml = minify(html, {
    collapseWhitespace: true,
    removeComments: true,
    
  });
  fs.writeFileSync(file, compressedHtml, 'utf8');
});
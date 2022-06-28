const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.join(__dirname, 'icons'));

for (let i = 0; i < files.length; i++) {
  const file = files[i];

  fs.renameSync(
    path.join(__dirname, 'icons') + `/${file}`,
    path.join(__dirname, 'icons') + `/${file.replace('(', '').replace(')', '')}`
  );
}

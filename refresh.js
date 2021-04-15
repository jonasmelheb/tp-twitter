const { resolve } = require('path');
const {
  appendFileSync,
  copyFileSync,
  existsSync,
  rmSync,
} = require('fs');

const refreshScript = `\n\n    script(src="${process.env.BROWSER_REFRESH_URL}")`;
const pugLayoutPath = resolve('views', 'layout.pug');
const pugLayoutPath_COPY = pugLayoutPath+"~";

if (!existsSync(pugLayoutPath_COPY)) {
  copyFileSync(pugLayoutPath, pugLayoutPath_COPY);
  appendFileSync(pugLayoutPath, refreshScript);
}

process.on('SIGINT', () => {
  copyFileSync(pugLayoutPath_COPY, pugLayoutPath);
  rmSync(pugLayoutPath_COPY);
  process.exit(0);
})

import { promises } from 'fs';
import { resolve } from 'path';

const { readFile } = promises;

const getHtmlIndex = async () => {
  const htmlPath = resolve(__dirname, '..', 'index.html');
  const manifestPath = resolve(__dirname, '..', 'public', 'manifest.json');
  let file = await readFile(htmlPath, { encoding: 'utf-8' });
  const rawManifest = await readFile(manifestPath, { encoding: 'utf-8' });
  const manifest = JSON.parse(rawManifest);
  Object.entries(manifest).forEach((entry) => {
    const [key, realPath] = entry;
    file = file.replace(`\${${key}}`, realPath);
  });
  return file;
};

export default getHtmlIndex;

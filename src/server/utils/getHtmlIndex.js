import { promises } from 'fs';
import { resolve } from 'path';

const { readFile } = promises;

const getHtmlIndex = async (env) => {
  const htmlPath = resolve(__dirname, '..', 'index.html');
  const manifestPath = resolve(__dirname, '..', 'public', 'manifest.json');
  let file = await readFile(htmlPath, { encoding: 'utf-8' });
  const rawManifest = await readFile(manifestPath, { encoding: 'utf-8' });
  const manifest = JSON.parse(rawManifest);
  Object.entries(manifest).forEach((entry) => {
    const [key, realPath] = entry;
    const regex = /(.*)(-.*)(\..*)/;
    const path =
      env === 'development' ? realPath.replace(regex, '$1$3') : realPath;
    file = file.replace(`\${${key}}`, path);
  });
  console.log(file);
  return file;
};

export default getHtmlIndex;

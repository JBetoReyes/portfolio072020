import { promises } from 'fs';
import { resolve } from 'path';

const { readFile } = promises;

const getHtmlIndex = async (env: string): Promise<string> => {
  const htmlPath = resolve(__dirname, '..', 'index.html');
  const manifestPath = resolve(__dirname, '..', 'public', 'manifest.json');
  let htmlString = await readFile(htmlPath, { encoding: 'utf-8' });
  const rawManifest = await readFile(manifestPath, { encoding: 'utf-8' });
  const manifest = JSON.parse(rawManifest);
  Object.entries(manifest).forEach((entry) => {
    const [key, realPath] = entry;
    const regex = /(.*)(-.*)(\..*)/;
    const path =
      env === 'development'
        ? (realPath as string).replace(regex, '$1$3')
        : realPath;
    htmlString = htmlString.replace(`\${${key}}`, path as string);
  });
  return htmlString;
};

export default getHtmlIndex;

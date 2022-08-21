import { resolve } from 'path';
import { lstatSync } from 'fs-extra';

export const getBinPath = () => {
  const globalPath = resolve(__dirname, '../node_modules/.bin');
  const localPath = resolve(__dirname, '../../../.bin');
  let binPath;
  try {
    lstatSync(globalPath).isDirectory();
    binPath = globalPath;
  } catch {
    binPath = localPath;
  }
  return binPath;
};

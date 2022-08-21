import { execaSync, execa, SyncOptions } from 'execa';
import { getBinPath } from './utils';
import { resolve } from 'path';
import watch from 'glob-watcher';

import { ESLint } from 'eslint';
import configReact from './config/react';

// export const BIN_PATH = getBinPath();
// export const BIN_ESLINT = `${BIN_PATH}/eslint`;
// export const STDIO_OPTION: SyncOptions = { stdio: 'inherit' };

// const watcher = watch(['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx', '**/*.vue']);

// eslint 오류로 잠시 보류
const eslint = new ESLint({
  // fix: false,
  // baseConfig: configReact,
});

export const command = {
  run: async (type: any) => {
    // const results = await eslint.lintFiles(["**/*.ts"]);
    // const formatter = await eslint.loadFormatter("json");
    // const resultText = formatter.format(results);
    // console.log(resultText);
    // try {
    //   watcher.on('change', function (path, stat) {
    //     console.log(path)
    //   });
    //   watcher.on('add', function (path, stat) {
    //     // 복붙시 2번 실행 될수 있음.
    //     console.log(path)
    //   });
    //   execaSync(BIN_ESLINT, ['-c', '-f', 'json', resolve(__dirname, `config/${type}.js`)], STDIO_OPTION);
    // } catch {
    //   // console.log('❗️ Error: tsc failed.');
    // }
  },
}

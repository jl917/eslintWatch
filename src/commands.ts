import { reactConfig } from './config/react';
import { ESLint } from 'eslint';
import { formatPath, getLintFileList } from './utils';

interface ICommand {
  targets: null | string[];
  run: any;
}

const configMap = {
  react: reactConfig,
  vue: reactConfig,
}

export const command: ICommand = {
  targets: null,
  run: async function (type: framework, mode: mode) {
    const isFix = mode === 'fix' || mode === 'fixWatch'
    const eslint = new ESLint({
      fix: isFix,
      baseConfig: configMap[type],
    });
    const results = await eslint.lintFiles(this.targets || getLintFileList());
    if (isFix) {
      console.log('fix mode');
      await ESLint.outputFixes(results);
    }
    const formatter = await eslint.loadFormatter(formatPath('stylish'));
    const resultText = formatter.format(results);


    console.log(resultText);

    if (mode === 'watch' || mode === 'fixWatch') {
      const formatterJson = await eslint.loadFormatter(formatPath('json'));
      const resultJson = formatterJson.format(results);
      command.targets = JSON.parse(resultJson as string).map((e: ESLint.LintResult) => e.filePath);
    }

  },
}

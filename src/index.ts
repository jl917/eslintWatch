import arg from 'arg';
import watch from 'glob-watcher';
import { debounce } from 'lodash-es';
import { command } from './commands';
import { watchTargets } from './config'

const args = arg({
  '--help': Boolean,
  '--type': String,
  '--mode': String,
  // node ./dist/index.js -t react
  '-t': '--type', // react | vue
  '-m': '--mode', // default | watch | fix | fixWatch
});

const type: any = args['--type'] || 'react';
const mode: any = args['--mode'] || 'default';

const check = () => command.run(type, mode)
const dCheck = debounce(check, 300)

if (mode === 'watch' || mode === 'fixWatch') {
  const watcher = watch(watchTargets, { ignored: /[\\/]node_modules[\\/]/ });

  const cb = (path: string) => {
    if(!command.targets){
      command.targets = [];
    }
    command.targets = [...new Set([...command.targets, path])];
    dCheck()
  }

  watcher.on('change', cb);
  watcher.on('add', cb);
}

check();
// console.log(args);


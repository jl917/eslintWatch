import arg from 'arg';
import { command } from './commands';

const args = arg({
  '--help': Boolean,
  '--type': String,
  '--mode': String,
  // // node ./dist/index.js -t react
  '-t': '--type', // react | vue
  '-m': '--mode', // default | watch | fix | fixWatch
});

// console.log(args);

command.run(args['--type']);
const esbuild = require('esbuild');
const package = require('../package.json');
const { execSync } = require('child_process');

const branch = execSync('git branch --show-current').toString().trim();

const outfileMap = {
  master: package.bin.jlint,
  next: package.bin.next_jlint,
}

esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  write: true,
  platform: 'node',
  target: ['node14'],
  outfile: outfileMap[branch] || package.bin.jlint,
  minify: true,
  banner: { js: '#!/usr/bin/env node' },
});

esbuild.buildSync({
  entryPoints: {
    'formatters/json':  'src/formatters/json.js',
    'formatters/stylish': 'src/formatters/stylish.js',
  },
  bundle: true,
  write: true,
  platform: 'node',
  target: ['node14'],
  minify: true,
  external: ['esbuild'],
  outdir: 'dist',
});

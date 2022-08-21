const esbuild = require('esbuild');

esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  write: true,
  platform: 'node',
  target: ['node14'],
  outfile: 'dist/index.js',
  minify: true,
  banner: { js: '#!/usr/bin/env node' },
});

esbuild.buildSync({
  entryPoints: {
    'config/react': 'src/config/react.js',
  },
  bundle: true,
  write: true,
  platform: 'node',
  format: 'cjs',
  target: ['node14'],
  outdir: 'dist',
  minify: true,
  external: ['esbuild']
});
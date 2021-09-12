// Note :  This file created because the jest runner does not read the .babelrc file

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
    '@babel/plugin-proposal-async-generator-functions',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-syntax-jsx',
  ],

  env: {
    test: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            absoluteRuntime: false,
            corejs: false,
            helpers: true,
            regenerator: true,
            useESModules: false,
          },
        ],
        '@babel/plugin-proposal-async-generator-functions',
        '@babel/plugin-transform-async-to-generator',
      ],
    },
  },
};

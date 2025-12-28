module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        throwIfNamespace: false, // This suppresses the namespace warning
      },
    ],
  ],
};

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  
  
  resolver: {
    assetExts: getDefaultConfig(__dirname).resolver.assetExts.filter(
      ext => ext !== 'svg',
    ),
    sourceExts: [...getDefaultConfig(__dirname).resolver.sourceExts, 'svg'],
    blacklistRE: /.*\.idea\/.*|.*\.cache\/.*|.*\.gradle\/.*|.*\.svn\/.*|.*\.hg\/.*|.*\.lock-wscript\/.*|.*\.wafpickle-.*|.*\.npm\/.*|.*\.yarn-cache\/.*|.*\.eslintcache\/.*|.*\.next\/.*/,

  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
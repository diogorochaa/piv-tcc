module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver'],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
    ],
  }
}

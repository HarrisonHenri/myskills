const appData = require('./app.json');

module.exports = {
  bumpFiles: [
    {
      filename: 'package.json',
    },
    {
      filename: 'ios/myskills/Info.plist',
      updater: require.resolve(
        '@brettdh/standard-version-expo/ios/native/app-version'
      ),
    },
    {
      filename: 'ios/myskills/Info.plist',
      updater: require.resolve(
        '@brettdh/standard-version-expo/ios/native/buildnum/increment'
      ),
    },
    {
      filename: 'android/app/build.gradle',
      updater: require.resolve(
        '@brettdh/standard-version-expo/android/native/app-version'
      ),
    },
    {
      filename: 'android/app/build.gradle',
      updater:
      require('@brettdh/standard-version-expo/android/native/buildnum/code')(
        appData.expo.sdkVersion
      ),
    },
  ],
  skip: {
    commit: true,
    tag: true
  }
};

module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "dotenv-import",
      {
        moduleName: "@env",
        path: ".env"
      }
    ],
    "react-native-reanimated/plugin" // tem que ser o último!
  ]
};

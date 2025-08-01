export default () => ({
  expo: {
    name: "MoviesExplorer",
    slug: "moviesexplorer",
    scheme: "moviesexplorer",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true
    },
    android: {
      package: "com.seunome.moviesexplorer"
    },
    web: {
      bundler: "metro",
      output: "static"
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true
    },
    extra: {
      API_URL: process.env.API_URL,
      API_TOKEN: process.env.API_TOKEN,
      API_KEY: process.env.API_KEY
    }
  }
});

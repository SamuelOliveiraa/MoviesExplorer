# Movies Explorer

![Project Image](/src/assets/og-image.png)

Movies Explorer is a mobile application developed in React Native with Expo, which allows you to explore popular movies and series, search for titles, view details, and save favorites.

## Features

- Listing of popular movies and series
- Search for movies and series by title
- View details (synopsis, rating, release date, trailer)
- Save and remove favorite movies/series
- Modern interface with tab navigation

## Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Gluestack UI](https://ui.gluestack.io/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Axios](https://axios-http.com/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)

## Project Structure

```
MoviesExplorer/
├── src/
│   ├── app/                # Routes and main screens
│   ├── assets/             # Static images and resources
│   ├── components/         # Reusable components
│   ├── config/             # Theme and color settings
│   ├── hooks/              # Custom hooks (e.g., API)
│   ├── storage/            # Favorites management
│   ├── types/              # TypeScript typings
│   └── utils/              # Utilities
├── .env                    # Environment variables (API)
├── app.config.js           # Expo configuration
├── package.json            # Dependencies and scripts
└── ...
```

## How to run the project

1. **Clone the repository**

   ```sh
   git clone https://github.com/youruser/moviesexplorer.git
   cd moviesexplorer
   ```

2. **Install the dependencies**

   ```sh
   npm install
   ```

3. **Configure environment variables**
   - Create a .env file in the root of the project with the following variables:
     ```
     API_URL=https://api.themoviedb.org/3
     API_TOKEN=your_token_here
     API_KEY=your_api_key_here
     ```

4. **Start the project**
   ```sh
   npm start
   ```
   Or use `npm run android` or `npm run ios` to run on a specific emulator.

## Available Scripts

- `npm start` — Starts Expo
- `npm run android` — Runs on Android
- `npm run ios` — Runs on iOS
- `npm run web` — Runs in the browser
- `npm test` — Runs the tests

## License

This project is for study purposes only.

---

Feel free to contribute or suggest improvements!

// gluestack-ui.config/config.ts
import { config as defaultConfig } from "@gluestack-ui/config";

export const config = {
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      purpleBase: "#892CCD",
      purpleLight: "#A85FDD",
      gray50: "#0000005e",
      gray100: "#0F0F1A",
      gray200: "#131320",
      gray300: "#1A1B2D",
      gray400: "#45455F",
      gray500: "#7A7B9F",
      gray600: "#B5B6C9",
      gray700: "#E4E5EC",
      white: "#FFFFFF"
    }
  }
};

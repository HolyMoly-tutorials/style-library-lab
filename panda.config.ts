import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            DEFAULT: { value: '#0070f3' },
            dark: { value: '#0051a2' }
          },
          secondary: {
            DEFAULT: { value: '#f5f5f5' },
            dark: { value: '#e5e5e5' }
          },
        },
      },
      semanticTokens: {
        colors: {
          'button-primary': { value: '{colors.primary.DEFAULT}' },
          'button-primary-hover': { value: '{colors.primary.dark}' },
          'button-secondary': { value: '{colors.secondary.DEFAULT}' },
          'button-secondary-hover': { value: '{colors.secondary.dark}' },
        },
      },
    },
  },
  outdir: "styled-system",
  jsxFramework: 'react',
}); 
// theme.css.ts
import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
	asdf: "pink",
	colors: {
		primary: "hsl(220, 90%, 56%)",
		secondary: "hsl(260, 80%, 60%)",
		background: "hsl(0, 0%, 98%)",
		text: "hsl(0, 0%, 20%)",
	},
	spacing: {
		small: "8px",
		medium: "16px",
		large: "24px",
	},
	font: {
		size: {
			base: "16px",
			heading: "24px",
		},
	},
});

import React from "react";
import { ThemeProvider } from "../src/components/vanilla/theme-provider/theme-provider";
import type { Preview } from "@storybook/react";

import "../styled-system/styles.css";

const preview: Preview = {
	decorators: [
		(Story) => {
			return (
				<ThemeProvider>
					<Story />
				</ThemeProvider>
			);
		},
	],
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;

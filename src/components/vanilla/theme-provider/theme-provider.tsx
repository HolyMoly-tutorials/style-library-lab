// ThemeProvider.tsx
import React, { createContext, useContext, ReactNode } from "react";
import { themeClass } from "../../../styles/theme.css";

type ThemeProviderProps = {
	children: ReactNode;
};

const ThemeContext = createContext<string | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	return (
		<ThemeContext.Provider value={themeClass}>
			<div className={themeClass}>{children}</div>
		</ThemeContext.Provider>
	);
};

// 테마 클래스 사용을 위한 훅
export const useTheme = () => {
	const theme = useContext(ThemeContext);
	if (!theme) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return theme;
};

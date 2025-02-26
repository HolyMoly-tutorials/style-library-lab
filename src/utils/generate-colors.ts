export type TColor =
	| "primary"
	| "secondary"
	| "warning"
	| "success"
	| "danger"
	| "hint"
	| "contrast";

export function generateColors(color: TColor) {
	return {
		"--colors-themes-color": `var(--${color})`,
		"--colors-foreground": `var(--foreground-${color})`,
		"--colors-foreground-on-transparent": `var(--foreground-${color}-on-transparent)`,
		"--colors-foreground-on-background": `var(--foreground-${color}-on-background)`,

		"--colors-themes-text": `var(--text-${color})`,
		"--colors-themes-text-alternative": `var(--text-${color}-alternative)`,
		"--colors-themes-transparent-8": `var(--${color}-transparent-8)`,
		"--colors-themes-transparent-16": `var(--${color}-transparent-16)`,
		"--colors-themes-transparent-24": `var(--${color}-transparent-24)`,
		"--colors-themes-transparent-32": `var(--${color}-transparent-32)`,
		"--colors-themes-hover": `var(--${color}-hover)`,
		"--colors-themes-active": `var(--${color}-active)`,
	};
}

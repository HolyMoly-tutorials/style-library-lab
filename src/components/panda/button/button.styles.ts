import { defineRecipe } from "@pandacss/dev";
import { generateColors, type TColor } from "../../../utils/generate-colors";

export const buttonRecipe = defineRecipe({
	className: "button",
	base: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "border-radius-300",
		border: "none",
		color: "foreground-accent",
		cursor: "pointer",

		_disabled: {
			pointerEvents: "none",
			opacity: 0.32,
		},
	},
	defaultVariants: {
		color: "primary",
		size: "md",
		shape: "fill",
		stretch: false,
		disabled: false,
	},
	variants: {
		size: {
			sm: {
				gap: "space-050",
				height: "dimension-300",
				paddingLeft: "space-100",
				paddingRight: "space-100",
				textStyle: "subtitle1",
			},
			md: {
				gap: "space-075",
				height: "dimension-400",
				paddingLeft: "space-150",
				paddingRight: "space-150",
				textStyle: "subtitle1",
			},
			lg: {
				gap: "space-100",
				height: "dimension-500",
				paddingLeft: "space-200",
				paddingRight: "space-200",
				textStyle: "subtitle1",
			},
			xl: {
				gap: "space-100",
				height: "dimension-600",
				paddingLeft: "space-300",
				paddingRight: "space-300",
				textStyle: "heading6",
			},
		},
		stretch: { true: { width: "100%" }, false: {} },
		color: {
			primary: generateButtonColors("primary"),
			secondary: generateButtonColors("secondary"),
			success: generateButtonColors("success"),
			warning: generateButtonColors("warning"),
			danger: generateButtonColors("danger"),
			hint: generateButtonColors("hint"),
			contrast: generateButtonColors("contrast"),
		},
		shape: {
			fill: {
				backgroundColor: "var(--colors-themes-color)",
				color: "var(--colors-themes-foreground)",
			},
			outline: {
				color: "var(--colors-foreground-on-transparent)",
				border: "0.0625rem solid var(--colors-themes-color)",
			},
			invisible: {
				color: "var(--colors-foreground)",
				backgroundColor: "transparent",
			},
		},
		disabled: {
			true: {
				pointerEvents: "none",
				opacity: 0.32,
			},
			false: {
				pointerEvents: "auto",
				opacity: 1,
			},
		},
	},
});

function generateButtonColors(color: TColor) {
	const foreground =
		color === "secondary"
			? `var(--foreground-secondary-on-transparent)`
			: `var(--foreground-accent)`;

	return {
		...generateColors(color),
		"--colors-themes-foreground": foreground,
	};
}

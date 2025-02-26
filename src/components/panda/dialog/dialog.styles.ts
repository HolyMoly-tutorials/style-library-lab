import { defineSlotRecipe } from "@pandacss/dev";

export const dialogRecipe = defineSlotRecipe({
	className: "dialog",
	slots: [
		"trigger",
		"close",
		"overlay",
		"content",
		"title",
		"description",
		"header",
		"body",
		"footer",
	],
	base: {
		overlay: {
			backgroundColor: "black-transparent-32",
			position: "fixed",
			inset: 0,
			zIndex: "overlay",

			_open: { opacity: 0.8 },
			_closed: { opacity: 0 },
		},
		content: {
			position: "fixed",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			zIndex: "overlay",

			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",

			backgroundColor: "background-alternative-02",
			borderRadius: "border-radius-300",

			opacity: 0,
			boxShadow: "0 1rem 2rem 0 rgba(0, 0, 0, 0.2)",

			_open: { opacity: 1 },
			_closed: { opacity: 0 },
		},
		title: {
			color: "text-normal",
			textStyle: "heading5",
		},
		description: {
			color: "text-normal",
			textStyle: "body2",
		},
		header: {
			display: "flex",
			alignItems: "center",
			flexShrink: 0,
			width: "100%",
			height: "dimension-700",
			py: 0,
			px: "300",
		},
		body: {
			width: "100%",
			py: 0,
			px: "300",
			overflowY: "auto",
		},
		footer: {
			display: "flex",
			alignItems: "center",
			width: "100%",
			py: "200",
			px: "300",
		},
	},
	defaultVariants: {
		size: "md",
	},
	variants: {
		size: {
			md: { content: { w: "31.25rem" } },
			lg: { content: { w: "50rem" } },
			xl: { content: { w: "71.25rem" } },
		},
	},
});

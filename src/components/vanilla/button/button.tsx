import * as React from "react";
import { RecipeVariants } from "@vanilla-extract/recipes";
import { buttonRecipe, type ButtonVariants } from "./button.css";

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		ButtonVariants {
	children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ children, className, color, size, shape, stretch, disabled, ...props },
		ref
	) => {
		return (
			<button
				ref={ref}
				className={buttonRecipe({ color, size, shape, stretch, disabled })}
				disabled={disabled}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";

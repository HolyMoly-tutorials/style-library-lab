import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { Unconditional } from "../../../libs/create-style-context";
import { vapor } from "../../../libs/factory";

import { button, ButtonVariantProps } from "../../../../styled-system/recipes";
import { cx } from "../../../../styled-system/css";

import { createSplitProps } from "../../../utils/create-split-props";

type ButtonVariant = Unconditional<ButtonVariantProps>;
type ButtonRef = ElementRef<"button">;

const styles = button;

/*************************************************************************/

export interface ButtonProps
	extends Omit<ComponentPropsWithoutRef<"button">, keyof ButtonVariant>,
		ButtonVariant {}

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
	const [variantProps, otherProps] = createSplitProps<ButtonVariant>()(
		props,
		button.variantKeys
	);
	const { className, children, ...restProps } = otherProps;
	const root = styles(variantProps);

	return (
		<vapor.button ref={ref} className={cx(root, className)} {...restProps}>
			{children}
		</vapor.button>
	);
});

Button.displayName = "Button";

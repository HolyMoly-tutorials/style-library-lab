// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from "react";
import {
	type ElementType,
	type ForwardRefExoticComponent,
	type PropsWithoutRef,
	type RefAttributes,
	createContext,
	forwardRef,
	useContext,
} from "react";
import { cx } from "~/styled-system/css";
import { styled } from "~/styled-system/jsx";
import { ConditionalValue } from "~/styled-system/types";

type RemoveConditional<T> = T extends ConditionalValue<infer U> ? U : T;
export type Unconditional<T> = { [K in keyof T]: RemoveConditional<T[K]> };

type Props = Record<string, unknown>;
type Recipe = {
	(props?: Props): Props;
	splitVariantProps: (props: Props) => [Props, Props];
};
type Slot<R extends Recipe> = keyof ReturnType<R>;

export const createStyleContext = <R extends Recipe>(recipe: R) => {
	const StyleContext = createContext<Record<Slot<R>, string> | null>(null);

	const withRootProvider = <P extends {}>(
		Component: (props: P) => ElementType<P, T>
	) => {
		const StyledComponent = (props: P) => {
			const [variantProps, otherProps] = recipe.splitVariantProps(props);
			const slotStyles = recipe(variantProps) as Record<Slot<R>, string>;

			return (
				<StyleContext.Provider value={slotStyles}>
					<Component {...props} />
				</StyleContext.Provider>
			);
		};
		return StyledComponent;
	};

	const withProvider = <T, P extends { className?: string | undefined }>(
		Component: (props: P) => ElementType<P, T>,
		slot: Slot<R>
	): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
		const StyledComponent = styled(Component);
		const StyledSlotProvider = forwardRef<T, P>((props, ref) => {
			const [variantProps, otherProps] = recipe.splitVariantProps(props);
			const slotStyles = recipe(variantProps) as Record<Slot<R>, string>;

			return (
				<StyleContext.Provider value={slotStyles}>
					<StyledComponent
						{...props}
						ref={ref}
						className={cx(slotStyles?.[slot], props.className)}
					/>
				</StyleContext.Provider>
			);
		});

		StyledSlotProvider.displayName = Component.displayName || Component.name;

		return StyledSlotProvider;
	};

	const withContext = <T, P extends { className?: string | undefined }>(
		Component: (props: P) => ElementType<P, T>,
		slot?: Slot<R>
	): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
		if (!slot) return Component;

		const StyledComponent = styled(Component);
		const StyledSlotComponent = forwardRef<T, P>((props, ref) => {
			const slotStyles = useContext(StyleContext);

			return (
				<StyledComponent
					{...props}
					ref={ref}
					className={cx(slotStyles?.[slot], props.className)}
				/>
			);
		});
		StyledSlotComponent.displayName = Component.displayName || Component.name;

		return StyledSlotComponent;
	};

	return {
		withRootProvider,
		withProvider,
		withContext,
	};
};

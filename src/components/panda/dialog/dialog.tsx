import React from "react";
import * as Radix from "@radix-ui/react-dialog";
import { vapor } from "~/libs/factory";
import { ComponentProps } from "react";
import { dialog, DialogVariantProps } from "~/styled-system/recipes";
import { createStyleContext } from "~/libs/create-style-context";
import { Assign } from "~/styled-system/types";

/************************************************************************************
 * Dialog
 ************************************************************************************/
const styles = dialog();

interface DialogProps extends Radix.DialogProps {
	size?: "md" | "lg" | "xl";
}

export const Dialog = (props: DialogProps) => {
	return <Radix.Dialog {...props} />;
};

/************************************************************************************
 * DialogContent
 ************************************************************************************/

interface ContentProps extends Radix.DialogContentProps {}

const Content = (props: ContentProps) => {
	return (
		<Radix.DialogPortal>
			<Radix.DialogOverlay className={styles.overlay} />
			<Radix.DialogContent className={styles.content} {...props} />
		</Radix.DialogPortal>
	);
};

/************************************************************************************
 * DialogTrigger
 ************************************************************************************/

interface TriggerProps extends Radix.DialogTriggerProps {}

const Trigger = (props: TriggerProps) => {
	return <Radix.DialogTrigger {...props} />;
};

/************************************************************************************
 * DialogTitle
 ************************************************************************************/

interface TitleProps extends Radix.DialogTitleProps {}

const Title = (props: TitleProps) => {
	return <Radix.DialogTitle className={styles.title} {...props} />;
};

/************************************************************************************
 * DialogClose
 ************************************************************************************/

interface CloseProps extends Radix.DialogCloseProps {}

const Close = (props: CloseProps) => {
	return <Radix.DialogClose {...props} />;
};

/************************************************************************************
 * DialogDescription
 ************************************************************************************/

interface DescriptionProps extends Radix.DialogDescriptionProps {}

const Description = (props: DescriptionProps) => {
	return <Radix.DialogDescription className={styles.description} {...props} />;
};

/************************************************************************************
 * DialogHeader
 ************************************************************************************/

interface HeaderProps extends ComponentProps<typeof vapor.div> {}

const Header = (props: HeaderProps) => {
	return <vapor.div className={styles.header} {...props} />;
};

/************************************************************************************
 * DialogBody
 ************************************************************************************/

interface BodyProps extends ComponentProps<typeof vapor.div> {}

const Body = (props: BodyProps) => {
	return <vapor.div className={styles.body} {...props} />;
};

/************************************************************************************
 * DialogFooter
 ************************************************************************************/

interface FooterProps extends ComponentProps<typeof vapor.div> {}

const Footer = (props: FooterProps) => {
	return <vapor.div className={styles.footer} {...props} />;
};

Dialog.Trigger = Trigger;
Dialog.Content = Content;
Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;
Dialog.Title = Title;
Dialog.Description = Description;
Dialog.Close = Close;

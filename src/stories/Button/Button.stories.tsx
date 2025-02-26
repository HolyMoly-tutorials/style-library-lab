import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button as PandaButton } from "../../components/panda/button/button";
import { Button as VanillaButton } from "../../components/vanilla/button/button";

const meta: Meta = {
	title: "Components/Button",
	parameters: {
		layout: "centered",
	},
};

export default meta;

export const Panda: StoryObj<typeof PandaButton> = {
	render: (args) => <PandaButton {...args}>PandaButton</PandaButton>,
	args: {
		color: "primary",
		size: "md",
		shape: "fill",
		stretch: false,
		disabled: false,
	},
};

export const Vanilla: StoryObj<typeof VanillaButton> = {
	render: (args) => <VanillaButton {...args}>VanillaButton</VanillaButton>,
};

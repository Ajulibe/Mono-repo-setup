import { ComponentStory, ComponentMeta } from "@storybook/react";
import ColorButton from "./Color";

export default {
  title: "Button",
  component: ColorButton,
} as ComponentMeta<typeof ColorButton>;

export const Primary: ComponentStory<typeof ColorButton> = () => (
  <ColorButton color="blue" />
);

Primary.storyName = "I am the primary";

import type { Meta, StoryObj } from "@storybook/react";

import { ButtonCollection } from "./Button";

const meta = {
  title: "UIKIT/Buttons",
  component: ButtonCollection,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof ButtonCollection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Кнопка",
    backgroundColor: "Primary",
    // disabled: false,
  },
};

export const PrimaryWhite: Story = {
  args: {
    label: "Кнопка",
    backgroundColor: "Primary White",
  },
};

export const Secondary: Story = {
  args: {
    label: "Кнопка",
    backgroundColor: "Secondary",
  },
};

export const SecondaryWhite: Story = {
  args: {
    label: "Кнопка",
    backgroundColor: "Secondary White",
  },
};

export const Flat: Story = {
  args: {
    label: "Кнопка",
    backgroundColor: "Flat",
  },
};

export const FlatWhite: Story = {
  args: {
    label: "Кнопка",
    backgroundColor: "Flat White",
  },
};

export const SecondaryDark: Story = {
  args: {
    label: "Кнопка",
    backgroundColor: "Secondary dark",
  },
};

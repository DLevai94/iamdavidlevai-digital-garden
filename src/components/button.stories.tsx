import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import Button from './button';

// 👇 This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
};

// 👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  text: 'Go Home',
  href: '/',
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InteractionButton } from '../../components/buttons/InteractionButton';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';

export default {
  title: 'Interactions',
  component: InteractionButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    type: {
      defaultValue: 'like',
    },
    quantity: {
      defaultValue: 0,
    },
    favourite: {
      defaultValue: false,
    },
    fCallBack: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof InteractionButton>;

const Template: ComponentStory<typeof InteractionButton> = (args) => (
  <InteractionButton {...args} />
);
/**
 * @button
 * @desc button standard slate
 */
export const InteractionButtonStory = Template.bind({});

InteractionButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

InteractionButtonStory.storyName = 'Comment/Like Button';

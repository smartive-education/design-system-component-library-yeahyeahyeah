import React, { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextBox } from '../../components/forms/TextBox';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form',
  component: TextBox,
  argTypes: {
    variant: {
      control: 'select',
      table: {
        summary: 'write',
      },
    },
    user: {
      control: {
        type: 'object',
      },
    },
    form: {
      control: {
        type: 'object',
      },
      defaultValue: {
        required: false,
        autoComplete: 'off',
        errorMessage: 'Da ist etwas schief gelaufen',
        placeholder: 'Na, was meinste dazu ...?',
        editType: 'textarea',
      },
    },
    upload: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Bild hochladen',
        icon: 'upload',
        size: 'small',
        type: 'button',
        variant: 'slate',
        width: 'full',
        fCallBack: action('upload in write component clicked'),
      },
    },
    send: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Absenden',
        icon: 'send',
        size: 'small',
        type: 'button',
        variant: 'violet',
        width: 'full',
        fCallBack: action('send in write component clicked'),
      },
    },
    setText: {
      control: false,
      table: {
        disable: true,
      },
    },
    mbSpacing: {
      control: false,
      table: {
        disable: true,
      },
    },
    startHeading: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'Hey, was läuft',
        },
      },
    },
    startParagraph: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'Schreib deinen ersten Mumble, oder folge einem User.',
        },
      },
    },
  },
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = (args) => {
  const [text, setText] = React.useState<string>('');

  useEffect(() => {
    console.log('text', text);
  }, [text]);

  return <TextBox {...args} setText={setText} />;
};

// WRITE STORY
export const TextBoxStory = Template.bind({});

TextBoxStory.argTypes = {
  user: {
    control: {
      type: 'object',
    },
    defaultValue: {
      label: 'Hey, was läuft?',
      variant: 'write',
      username: {
        type: 'joined',
        label: 'Username',
        href: '#',
      },
      avatar: {
        src: 'https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif',
        alt: 'Family Guy goes Mumble',
      },
    },
  },
};

TextBoxStory.args = {
  variant: 'start',
  startHeading: 'Hey, was läuft?',
  startParagraph: 'Schreib deinen ersten Mumble, oder folge einem User.',
};

TextBoxStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

TextBoxStory.storyName = 'TextBox';

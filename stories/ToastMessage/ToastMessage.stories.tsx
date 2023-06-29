import React from 'react';
import * as Toast from '@radix-ui/react-toast';

import { ToastMessage } from 'components';

const meta = {
  component: ToastMessage,
};

export default meta;

export const Primary = {
  decorators: [
    (Story) => (
      <Toast.Provider swipeDirection='right'>
        <Story />
      </Toast.Provider>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    severity: {
      options: ['primary', 'error', 'success'],
      control: 'radio',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isOpen: {
      options: [true, false],
      control: 'boolean',
    },
    message: {
      control: 'text',
    },
    onOpenChange: () => {},
  },
  args: {
    severity: 'primary',
    isOpen: true,
    message: 'This is a toast message',
    onOpenChange: () => {},
  },
};

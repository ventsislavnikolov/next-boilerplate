import '../app/[locale]/globals.css';

import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute, withThemeByClassName } from '@storybook/addon-styling';

import * as NextImage from 'next/image';
import React from 'react';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => React.createElement(OriginalNextImage, { ...props, unoptimized: true }),
});

Object.defineProperty(NextImage, '__esModule', {
  configurable: true,
  value: true,
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }) as any,
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
    }) as any,
  ],
};

export default preview;

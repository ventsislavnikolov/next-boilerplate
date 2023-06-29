import React from 'react';
import * as Toast from '@radix-ui/react-toast';
import { cva } from 'class-variance-authority';
import Image from 'next/image';

import forbidIcon from '../../public/icons/forbidIcon.svg';

const description = cva(['flex', 'items-center', 'justify-start'], {
  variants: {
    intent: {
      primary: ['text-center', 'text-white', '[grid-area:_title]'],
    },
    size: {
      md: ['text-[15px]'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface RenderProps {
  message: string;
}

export default function Render({ message }: RenderProps) {
  return (
    <Toast.Description className={description()}>
      <Image src={forbidIcon} width={24} height={24} alt='forbid icon' className='pr-2' />
      {message}
    </Toast.Description>
  );
}

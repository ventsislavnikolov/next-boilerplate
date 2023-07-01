import React from 'react';
import * as Toast from '@radix-ui/react-toast';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

import ToastViewport from './ToastMessageViewport';
import ToastDescription from './ToastMessageDescription';

import closeIcon from '../../public/icons/closeIcon.svg';

const defaultToastStyles = [
  'w-[360px]',
  'data-[state=closed]:animate-hide',
  'data-[swipe=end]:animate-swipeOut',
  'grid',
  'grid-cols-[auto_max-content]',
  'items-center',
  'rounded-md',
  'shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]',
  '[grid-template-areas:_"title_action"_"description_action"]',
  'data-[swipe=cancel]:translate-x-0',
  'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
  'data-[swipe=cancel]:transition-[transform_200ms_ease-out]',
];

const root = cva([...defaultToastStyles], {
  variants: {
    intent: {
      error: ['bg-error text-white'],
      primary: ['bg-primary text-white'],
      success: ['bg-success text-white'],
    },
    size: {
      md: ['gap-x-[15px]', 'p-[15px]'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface RenderProps {
  isOpen: boolean;
  message: string;
  severity: 'error' | 'primary' | 'success';
  onOpenChange: () => void;
}

export default function Render({ isOpen, message, severity, onOpenChange }: RenderProps) {
  return (
    <>
      <Toast.Root
        className={twMerge(root({ intent: severity }))}
        open={isOpen}
        duration={3000}
        onOpenChange={() => onOpenChange()}
      >
        <ToastDescription message={message} />
        <Toast.Close>
          <Image src={closeIcon} width={24} height={24} alt='close icon' />
        </Toast.Close>
      </Toast.Root>
      <ToastViewport />
    </>
  );
}

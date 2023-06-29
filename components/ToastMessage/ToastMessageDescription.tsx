import * as Toast from '@radix-ui/react-toast';
import { cva } from 'class-variance-authority';
import Image from 'next/image';

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
      <Image
        src='/icons/forbidIcon.svg'
        width={24}
        height={24}
        alt='forbid icon'
        className='pr-2'
      />
      {message}
    </Toast.Description>
  );
}

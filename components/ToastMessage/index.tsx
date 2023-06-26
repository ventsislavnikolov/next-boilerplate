import * as Toast from '@radix-ui/react-toast';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

// import closeIcon from 'assets/icons/closeIcon.svg';
// import forbidIcon from 'assets/icons/forbidIcon.svg';

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

const viewport = cva(
  ['fixed', 'bottom-0', 'right-0', 'z-[2147483647]', 'm-0', 'flex', 'list-none', 'flex-col'],
  {
    variants: {
      intent: {
        primary: [
          'gap-[10px]',
          'p-[var(--viewport-padding)]',
          'outline-none',
          '[--viewport-padding:_25px]',
        ],
      },
      size: {
        md: ['w-[402px]', 'max-w-[100vw]'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  },
);

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
        onOpenChange={() => onOpenChange()}>
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
        <Toast.Close>
          <Image src='/icons/closeIcon.svg' width={24} height={24} alt='close icon' />
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport className={viewport()} />
    </>
  );
}

/* eslint-disable tailwindcss/no-custom-classname */
import { cva } from 'class-variance-authority';

const container = cva(
  ['flex', 'flex-col', 'items-center', 'justify-center', 'fixed', 'inset-0', 'z-50'],
  {
    defaultVariants: {
      intent: 'primary',
      size: 'full',
    },
    variants: {
      intent: {
        primary: ['bg-white', 'dark:bg-black'],
      },
      size: {
        full: ['h-screen'],
      },
    },
  },
);

const spinner = cva(['animate-spin', 'rounded-full'], {
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
  variants: {
    intent: {
      primary: ['border-2', 'border-solid', 'border-primary', 'border-t-transparent'],
    },
    size: {
      md: ['h-[30px]', 'w-[30px]'],
    },
  },
});

export default function Render() {
  return (
    <div className={container()} data-testid='loader'>
      <div className={spinner()} />
    </div>
  );
}

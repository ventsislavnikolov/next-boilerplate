import { cva } from 'class-variance-authority';

const container = cva(
  ['flex', 'flex-col', 'items-center', 'justify-center', 'fixed', 'inset-0', 'z-50'],
  {
    variants: {
      intent: {
        primary: ['bg-white', 'dark:bg-black'],
      },
      size: {
        full: ['h-screen'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'full',
    },
  },
);

const spinner = cva(['animate-spin', 'rounded-full'], {
  variants: {
    intent: {
      primary: ['border-[2px]', 'border-solid', 'border-primary', 'border-t-transparent'],
    },
    size: {
      md: ['h-[30px]', 'w-[30px]'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
});

export default function Render() {
  return (
    <div className={container()} data-testid='loader'>
      <div className={spinner()} />
    </div>
  );
}

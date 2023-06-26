import { cva } from 'class-variance-authority';

const container = cva(['h-screen', 'w-full'], {
  variants: {
    intent: {
      primary: ['flex', 'flex-col', 'items-center', 'justify-center'],
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

const background = cva(['absolute', 'rounded-full'], {
  variants: {
    intent: {
      primary: ['border-[2px]', 'border-solid', 'border-gray-200'],
    },
    size: {
      xs: ['h-[30px]', 'w-[30px]'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'xs',
  },
});

const spinner = cva(['absolute', 'animate-spin', 'rounded-full'], {
  variants: {
    intent: {
      primary: ['border-[2px]', 'border-solid', 'border-primary', 'border-t-transparent'],
    },
    size: {
      xs: ['h-[30px]', 'w-[30px]'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'xs',
  },
});

export default function Render() {
  return (
    <div className={container()} data-testid='loader'>
      <div className={background()}>
        <div className={spinner()} />
      </div>
    </div>
  );
}

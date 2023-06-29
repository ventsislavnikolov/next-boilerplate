import * as Toast from '@radix-ui/react-toast';
import { cva } from 'class-variance-authority';

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

export default function Render() {
  return <Toast.Viewport className={viewport()} />;
}

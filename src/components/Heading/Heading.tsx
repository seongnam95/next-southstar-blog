import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import { ComponentPropsWithout, RemovedProps } from '@/helpers/component_props';
import { cn } from '@/lib/utils';

const headingVariants = cva('font-bold', {
  variants: {
    level: {
      '1': 'text-xs',
      '2': 'text-sm',
      '3': 'text-base',
      '4': 'text-lg',
      '5': 'text-2xl',
      '6': 'text-3xl',
      '7': 'text-4xl',
      '8': 'text-5xl',
      '9': 'text-6xl',
    },
    weight: {
      normal: 'font-normal',
      bold: 'font-bold',
      extra: 'font-extrabold',
      black: 'font-black',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: { level: '5', align: 'left', weight: 'bold' },
});

type HeadingElement = React.ElementRef<'h1'>;
type HeadingElementProps = ComponentPropsWithout<'h1', RemovedProps>;
type HeadingAsChildProps = { asChild: true; as?: never } & HeadingElementProps;
type HeadingAsProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  asChild?: false;
} & HeadingElementProps;

type HeadingProps = VariantProps<typeof headingVariants> & (HeadingAsChildProps | HeadingAsProps);

const Heading = React.forwardRef<HeadingElement, HeadingProps>(
  ({ className, children, level, weight, align, asChild, as: Tag = 'h1', ...headingProps }, ref) => (
    <Slot {...headingProps} ref={ref} className={cn(headingVariants({ level, weight, align, className }))}>
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  ),
);

Heading.displayName = 'Heading';

export { Heading, headingVariants };
export type { HeadingProps };

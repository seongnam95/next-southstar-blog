import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import { ComponentPropsWithout, RemovedProps } from '@helpers/component_props';

import { cn } from '@lib/utils';

const textVariants = cva('', {
  variants: {
    size: {
      default: 'text-sm',
      xs: 'text-xs',
      sm: 'text-[13px]',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      normal: 'font-normal',
      bold: 'font-bold',
      extra: 'font-extrabold',
      black: 'font-black',
    },
    color: {
      default: '',
      muted: 'text-muted-foreground',
      hint: 'text-muted-foreground/80',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    whiteSpace: {
      normal: 'whitespace-normal',
      nowrap: 'whitespace-nowrap',
      pre: 'whitespace-pre',
      preLine: 'whitespace-pre-line',
      preWrap: 'whitespace-pre-wrap',
      break: 'whitespace-break-spaces',
    },
  },
  defaultVariants: {
    size: 'default',
    weight: 'normal',
    color: 'default',
    align: 'left',
    whiteSpace: 'nowrap',
  },
});

type TextElement = React.ElementRef<'span'>;
type TextAsChildProps = { asChild: true; as?: never } & ComponentPropsWithout<'span', RemovedProps>;
type TextSpanProps = { as?: 'span'; asChild?: false } & ComponentPropsWithout<'span', RemovedProps>;
type TextDivProps = { as: 'div'; asChild?: false } & ComponentPropsWithout<'div', RemovedProps>;
type TextLabelProps = { as: 'label'; asChild?: false } & ComponentPropsWithout<'label', RemovedProps>;
type TextPProps = { as: 'p'; asChild?: false } & ComponentPropsWithout<'p', RemovedProps>;

type TextProps = VariantProps<typeof textVariants> &
  (TextAsChildProps | TextSpanProps | TextDivProps | TextLabelProps | TextPProps);

const Text = React.forwardRef<TextElement, TextProps>(
  (
    { className, children, size, weight, color, align, whiteSpace, asChild, as: Tag = 'span', ...textProps },
    ref,
  ) => (
    <Slot
      {...textProps}
      ref={ref}
      className={cn(textVariants({ size, weight, color, align, whiteSpace, className }))}
    >
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  ),
);

Text.displayName = 'Text';

export { Text, textVariants };
export type { TextProps };

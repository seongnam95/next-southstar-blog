import React from 'react';

import { AiFillBulb } from 'react-icons/ai';
import { IoIosWarning, IoMdInformationCircle } from 'react-icons/io';
import { MdDangerous } from 'react-icons/md';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/cn';

const calloutVariants = cva('flex items-center gap-4 my-4 rounded-md px-4 py-3', {
  variants: {
    status: {
      default: 'bg-surface',
      info: 'bg-blue-surface text-blue-foreground',
      tip: 'bg-green-surface text-green-foreground',
      warn: 'bg-yellow-surface text-yellow-foreground',
      danger: 'bg-red-surface text-blue-foreground',
    },
  },
  defaultVariants: {
    status: 'default',
  },
});

export interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {}

const Callout = ({ className, status, ...props }: CalloutProps) => {
  const StatusIcon = {
    default: null,
    info: <IoMdInformationCircle />,
    tip: <AiFillBulb />,
    warn: <IoIosWarning />,
    danger: <MdDangerous />,
  };

  return (
    <div className={cn(calloutVariants({ status }), className)} {...props}>
      <div className="text-lg">{status && StatusIcon[status]}</div>
      <div className="text-sm leading-6">{props.children}</div>
    </div>
  );
};

export default Callout;

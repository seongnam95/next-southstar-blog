import React from 'react';

import { cn } from '@/lib/utils';

interface ContentProps {
  children?: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <div className={cn('m-auto mt-20 min-h-full max-w-[900px] p-6')}>{children}</div>;
};

export default Content;

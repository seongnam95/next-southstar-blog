import React from 'react';

import { cn } from '@/lib/cn';

interface ContentProps {
  children?: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <div className={cn('m-auto mt-28 min-h-full max-w-[700px] p-6')}>{children}</div>;
};

export default Content;

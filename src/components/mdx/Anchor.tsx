import React from 'react';

import Link from 'next/link';

import { cn } from '@/lib/cn';

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Anchor = ({ className, href, ...props }: AnchorProps) => {
  const isExternal = href && href.startsWith('http');

  if (isExternal)
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : '_self'}
        className={cn(isExternal && 'external-link', className)}
        {...props}
      />
    );
  return <Link href={href ?? '/'} {...props} />;
};

export default Anchor;

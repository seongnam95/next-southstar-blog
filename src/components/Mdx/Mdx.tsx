import React from 'react';

import { useMDXComponent } from 'next-contentlayer/hooks';

import Callout from '@/components/Mdx/components/Callout';
import { Badge } from '@/components/ui/Badge';

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return (
    <article className="prose break-keep prose-a:break-all">
      <Component
        components={{
          Callout: (props) => <Callout {...props} />,
          Badge: (props) => <Badge {...props} />,
          a: (props) => <a {...props} className="no-underline underline-offset-2 hover:underline" />,
          figure: (props) => <figure {...props} className="mt-[1em]" />,
        }}
      />
    </article>
  );
};

export default Mdx;

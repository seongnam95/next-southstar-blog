import React from 'react';

import { useMDXComponent } from 'next-contentlayer/hooks';

import Anchor from '@/components/mdx/Anchor';
import Callout from '@/components/mdx/Callout';
import { Badge } from '@/components/ui/Badge';

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return (
    <article className="prose break-keep prose-a:break-all">
      <Component
        components={{
          a: (props) => <Anchor {...props} />,
          Mark: (props) => <mark {...props} className="bg-muted text-foreground" />,
          figure: (props) => <figure {...props} className="mt-[1em]" />,
          Callout: (props) => <Callout {...props} />,
          Badge: (props) => <Badge {...props} />,
        }}
      />
    </article>
  );
};

export default Mdx;

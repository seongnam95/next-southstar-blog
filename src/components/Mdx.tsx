import React from 'react';

import { useMDXComponent } from 'next-contentlayer/hooks';

import Callout from '@/components/mdx/Callout';

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return (
    <article className="prose break-keep prose-a:break-all">
      <Component
        components={{
          Callout: (props) => <Callout {...props} />,
        }}
      />
    </article>
  );
};

export default Mdx;

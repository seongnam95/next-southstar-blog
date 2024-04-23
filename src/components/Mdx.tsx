import React from 'react';

import { useMDXComponent } from 'next-contentlayer/hooks';

import Callout from '@/components/mdx/Callout';

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return (
    <article className="post">
      <Component
        components={{
          Callout: (props) => <Callout {...props} />,
        }}
      />
    </article>
  );
};

export default Mdx;

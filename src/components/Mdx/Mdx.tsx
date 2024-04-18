import React from 'react';

import { useMDXComponent } from 'next-contentlayer/hooks';

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return (
    <article className="prose break-keep prose-a:break-all">
      <Component
        components={{
          figure: (props) => <figure {...props} className="mt-[1em]" />,
        }}
      />
    </article>
  );
};

export default Mdx;

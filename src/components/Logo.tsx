import React from 'react';

import Link from 'next/link';

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  return (
    <div>
      <Link className="p-1 font-semibold" href="/">
        SouthStar.log
      </Link>
    </div>
  );
};

export default Logo;

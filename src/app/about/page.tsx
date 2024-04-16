import React from 'react';

interface AboutPageProps {
  children?: React.ReactNode;
}

const AboutPage = ({ children }: AboutPageProps) => {
  return <div>{children}AboutPage</div>;
};

export default AboutPage;

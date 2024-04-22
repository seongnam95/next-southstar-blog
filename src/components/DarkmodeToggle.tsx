'use client';

import * as React from 'react';

import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

import { useTheme } from 'next-themes';

import { IconButton } from '@/components/ui/IconButton';

export const DarkmodeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <IconButton aria-label="Darkmode toggle button" variant="ghost" onClick={toggleTheme}>
      <IoSunnyOutline className="hidden text-lg dark:block" />
      <IoMoonOutline className="ml-2pxr text-lg dark:hidden" />
    </IconButton>
  );
};

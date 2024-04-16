import type { Config } from 'tailwindcss';

const numToRem = (num: number): string => `${(num / 0.5) * 0.125}rem`;
const pxToRem = (px: number, base: number = 16): string => `${px / base}rem`;
const range = (start: number, end: number, unit: number = 1): number[] => {
  const length = Math.ceil((end - start) / unit + 1);
  return Array.from({ length }, (_, i) => start + i * unit);
};

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    spacing: {
      ...range(1, 100).reduce((acc: Record<string, string>, px) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
      ...range(0, 50, 0.5).reduce((acc: Record<string, string>, px) => {
        acc[`${px}`] = numToRem(px);
        return acc;
      }, {}),
    },
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      white: 'var(--white)',
      black: 'var(--black)',
      inner: 'var(--inner)',
      ring: 'var(--ring)',
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      primary: {
        DEFAULT: 'var(--primary)',
        accent: 'var(--primary-accent)',
        surface: 'var(--primary-surface)',
        foreground: 'var(--primary-foreground)',
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        accent: 'var(--secondary-accent)',
        foreground: 'var(--secondary-foreground)',
      },
      muted: {
        DEFAULT: 'var(--muted)',
        foreground: 'var(--muted-foreground)',
      },
      border: {
        DEFAULT: 'var(--border)',
        accent: 'var(--border-accent)',
      },
      destructive: {
        DEFAULT: 'var(--destructive)',
        accent: 'var(--destructive-accent)',
        foreground: 'var(--destructive-foreground)',
      },
      popover: {
        DEFAULT: 'var(--popover)',
        accent: 'var(--popover-accent)',
        foreground: 'var(--popover-foreground)',
      },
      card: {
        DEFAULT: 'var(--card)',
        foreground: 'var(--card-foreground)',
      },
    },
    extend: {
      screens: { mobile: '768px', tablet: '1024px' },
    },
  },
  plugins: [],
};
export default config;

import Typography from '@tailwindcss/typography';

const numToRem = (num) => `${(num / 0.5) * 0.125}rem`;
const pxToRem = (px, base = 16) => `${px / base}rem`;
const range = (start, end, unit = 1) => {
  const length = Math.ceil((end - start) / unit + 1);
  return Array.from({ length }, (_, i) => start + i * unit);
};

const config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    spacing: {
      ...range(1, 100).reduce((acc, px) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
      ...range(0, 50, 0.5).reduce((acc, px) => {
        acc[`${px}`] = numToRem(px);
        return acc;
      }, {}),
    },
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      white: '#fff',
      black: '#121212',
      surface: 'var(--surface)',
      ring: 'var(--ring)',
      background: 'var(--background)',
      foreground: {
        DEFAULT: 'var(--foreground)',
        accent: 'var(--foreground-accent)',
        muted: 'var(--foreground-muted)',
      },
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
      border: {
        DEFAULT: 'var(--border)',
        accent: 'var(--border-accent)',
      },
      card: {
        DEFAULT: 'var(--card)',
        foreground: 'var(--card-foreground)',
      },
      info: {
        DEFAULT: 'var(--info)',
        foreground: 'var(--info-foreground)',
      },
      tip: {
        DEFAULT: 'var(--tip)',
        foreground: 'var(--tip-foreground)',
      },
      warn: {
        DEFAULT: 'var(--warn)',
        foreground: 'var(--warn-foreground)',
      },
      danger: {
        DEFAULT: 'var(--danger)',
        foreground: 'var(--danger-foreground)',
      },
    },
    screens: { mobile: '768px', tablet: '1024px' },
  },
  plugins: [Typography],
};
export default config;

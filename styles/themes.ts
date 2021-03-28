const baseTheme = {
  transition: '0.2s',
  borderRadius: '12px',
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    primary: '#0366d6',
    primaryDark: '#0256c4',
    secondary: '#2ea44f',
    secondaryDark: '#2c974b',
    text: '#2b2d42',
    revertedText: '#ffffff',
    background: '#f5f5f5',
    grey: '#c5c5c7',
    greyDark: '#8a8a8e',
    greyLight: '#e5e5e6',
    white: '#ffffff',
  },
  shadows: {
    primary: 'rgba(3, 102, 214, 0.3) 0 0 0 3px',
    secondary: 'rgba(46, 164, 79, 0.4) 0 0 0 3px',
    grey: 'rgba(170, 170, 170, 0.2) 0 0 0 3px',
  },
};

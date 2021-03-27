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
    text: '#000000',
    revertedText: '#ffffff',
    background: '#f5f5f5',
  },
  shadows: {
    primary: 'rgba(3, 102, 214, 0.3) 0 0 0 3px',
    secondary: 'rgba(46, 164, 79, 0.4) 0 0 0 3px',
  },
};

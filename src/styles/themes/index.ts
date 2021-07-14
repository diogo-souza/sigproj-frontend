export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.4rem',
  },
  font: {
    family:
      "Open-Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    light: 300,
    regular: 400,
    semiBold: 500,
    bold: 600,
    extraBold: 800,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },
  colors: {
    primary: '#B51222',
    secondary: '#159CAE',
    tertiary: '#157BAE',

    success: '#48BB78',
    danger: '#dc3545',
    dangerShadow: 'rgba(220, 53, 69, 0.4)',
    warning: '#ffc107',
    focus: '#0d6efd',
    focusShadow: 'rgba(75, 174, 227, 0.4)',

    mainBg: '#F4F5F7',
    minorBg: '#242020',

    black: '#171923',
    darkGray: '#212227',
    gray: '#939393',
    lightGray: '#E1E1E1',
    white: '#FFFFFF',

    titleBlack: '#171923',
    titleWhite: '#FFFFFF',
    bodyBlack: '#939393',
    bodyWhite: '#FFFFFF',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
  },
} as const;

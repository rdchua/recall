import { extendTheme, theme } from "@chakra-ui/react";

const recallTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    body: "'Circular Std', sans-serif",
    heading: "'Circular Std', sans-serif",
  },
  fontSizes: {
    display: {
      "2xl": "4.5rem",
      xl: "3.75rem",
      lg: "3rem",
      md: "2.25rem",
      sm: "1.875rem",
      xs: "1.5rem",
    },
    header: {
      1: "2rem",
      2: "1.125rem",
      3: "1rem",
    },
    subtitle: "1rem",
    body: "0.875rem",
    xl: "1.25rem",
    lg: "1.125rem",
    md: "1rem",
    sm: "0.875rem",
    xs: "0.75rem"
  },
  lineHeights: {
    display: {
      "2xl": "5.625rem",
      xl: "4.625rem",
      lg: "3.75rem",
      md: "2.75rem",
      sm: "2.375rem",
      xs: "2rem",
    },
    header: {
      1: "2.5rem",
      2: "1.375rem",
      3: "1.25rem",
    },
    subtitle: "1.5rem",
    xl: "1.875rem",
    lg: "1.75rem",
    md: "1.5rem",
    sm: "1.25rem",
    xs: "1.125rem"
  },
  shadows: {
    xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    sm: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
    md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
    lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
    xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
    "2xl": '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
    "3xl": '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
    inner: 'inset 0px 1px 2px rgba(27, 46, 94, 0.3)'
  },
  colors: {
    ...theme.colors,    
    dark: "#404D61",
    teal: {
      ...theme.colors.teal,
      700: "#005661",
      500: "#00838e",
      300: "#4fb3be",
    },
    neutral: {
      100: "#F6F6F9",
      150: "#EAEAEF",
      200: "#DCDCE4",
      300: "#C0C0CF",
      400: "#A5A5BA",
      500: "#8E8EA9",
      600: "#666687",
      700: "#4A4A6A",
      800: "#32324D",
      900: "#212134",
    },
    primary: {
      100: "#D5E8E6",
      200: "#D9D8FF",
      500: "#00817a",
      600: "#00817a",
      700: "#0B2D2A",
      border: "#cce6e4"
    },
    warning: {
      100: "#FDF4DC",
      200: "#FAE7B9",
      500: "#F29D41",
      600: "#D9822F",
      700: "#BE5D01",
      border: "#fcebd9"
    },
    danger: {
      100: "#FCECEA",
      200: "#F5C0B8",
      500: "#EE5E52",
      600: "#D02B20",
      700: "#B72B1A",
      border: "#fcdfdc"
    },
    success: {
      100: "#EAFBE7",
      200: "#C6F0C2",
      500: "#5CB176",
      600: "#328048",
      700: "#2F6846",
      border: "#deefe4",
    },
    secondary: {
      100: "#EAF5FF",
      200: "#B8E1FF",
      500: "#66B7F1",
      600: "#0C75AF",
      700: "#006096",
      border: "#e0f1fc"
    },
    alternative: {
      100: "#F6ECFC",
      200: "#E0C1F4",
      500: "#AC73E6",
      600: "#9736E8",
      700: "#8312D1",
      border: "#eee3fa"
    }
  },
  breakpoints: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem"
  },
  space: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem"
  },
  border: "4px solid red"
});

export default recallTheme;

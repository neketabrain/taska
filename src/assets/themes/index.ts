// eslint-disable-next-line import/named
import { DefaultTheme } from "styled-components";

const steps = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];

function color(r: number, g: number, b: number): string[] {
  return steps.map((opacity) => `rgba(${r}, ${g}, ${b}, ${opacity})`);
}

const defaultColors = {
  white: "rgb(255, 255, 255)",
  whites: color(255, 255, 255),
  black: "rgb(0, 0, 0)",
  blacks: color(0, 0, 0),
  primary: "rgb(54, 53, 95)",
  primaries: color(54, 53, 95),
};

const defaultTheme: DefaultTheme = {
  colors: {
    ...defaultColors,
    bg: "rgb(228, 227, 232)",
    bgs: color(228, 227, 232),
    text: "rgb(25, 32, 58)",
    texts: color(25, 32, 58),
  },
};

export default { defaultTheme };

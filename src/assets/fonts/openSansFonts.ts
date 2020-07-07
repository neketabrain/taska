import { css } from "styled-components";

const openSansFonts = [
  {
    name: "Light",
    weight: 300,
  },
  {
    name: "Regular",
    weight: 400,
  },
  {
    name: "SemiBold",
    weight: 600,
  },
  {
    name: "Bold",
    weight: 700,
  },
  {
    name: "ExtraBold",
    weight: 800,
  },
];

const openSansFontFaces = openSansFonts.map(
  (font) => css`
    @font-face {
      font-family: "Open Sans";
      font-weight: ${font.weight};
      src: url(${require(`../../../static/fonts/OpenSans/${font.name}.woff2`)})
          format("woff2"),
        url(${require(`../../../static/fonts/OpenSans/${font.name}.woff`)})
          format("woff"),
        url(${require(`../../../static/fonts/OpenSans/${font.name}.ttf`)})
          format("truetype");
    }
  `
);

export default openSansFontFaces;

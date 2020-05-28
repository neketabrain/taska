import styled from "styled-components";
import { variant } from "styled-system";

import { ButtonProps } from "./Button.types";

const primary = {
  color: "buttons.primary.color",
  bg: "buttons.primary.background",
  border: "none",

  "&:hover:enabled, &:focus:enabled": {
    bg: "buttons.primary.backgroundHover",
  },

  "&:active:enabled": {
    bg: "buttons.primary.backgroundActive",
  },
};

const secondary = {
  color: "buttons.secondary.color",
  bg: "buttons.secondary.background",
  border: "1px solid",
  borderColor: "buttons.secondary.border",

  "&:hover:enabled, &:focus:enabled": {
    borderColor: "buttons.secondary.borderHover",
  },

  "&:active:enabled": {
    bg: "buttons.secondary.backgroundActive",
  },
};

const Button = styled.button<ButtonProps>`
  position: relative;
  width: 100%;
  height: 40px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
  outline: 0;
  font-size: 14px;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media screen and (max-width: 480px) {
    height: 50px;
    font-size: 16px;
  }

  ${variant({
    variants: {
      primary,
      secondary,
    },
  })};
`;

export default Button;

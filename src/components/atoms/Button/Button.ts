import styled from "styled-components";
import { variant } from "styled-system";

import { ButtonProps } from "./Button.types";

const primary = {
  color: "bg",
  bg: "buttons.primary.bg",
  border: "none",

  "&:hover:enabled, &:focus:enabled": {
    bg: "buttons.primary.hover",
  },

  "&:active:enabled": {
    bg: "buttons.primary.active",
  },
};

const secondary = {
  color: "text",
  bg: "buttons.secondary.bg",
  border: "1px solid",
  borderColor: "buttons.secondary.border",

  "&:hover:enabled, &:focus:enabled": {
    borderColor: "buttons.secondary.borderHover",
  },

  "&:active:enabled": {
    bg: "buttons.secondary.border",
  },
};

const Button = styled.button<ButtonProps>`
  position: relative;
  width: 100%;
  height: 40px;
  color: ${({ theme }): string => theme.colors.bg};
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

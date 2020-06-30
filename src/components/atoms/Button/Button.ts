import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";

import { ButtonProps } from "./Button.types";

const variants = {
  primary: css`
    background-color: ${({ theme }): string =>
      theme.colors.buttons.primary.background};
    color: ${({ theme }): string => theme.colors.buttons.primary.color};

    :focus {
      box-shadow: ${({ theme }): string =>
        theme.colors.buttons.primary.outline};
    }

    :hover {
      background-color: ${({ theme }): string =>
        theme.colors.buttons.primary.backgroundHover};
    }

    :active {
      background-color: ${({ theme }): string =>
        theme.colors.buttons.primary.backgroundActive};
    }
  `,
  secondary: css`
    background-color: ${({ theme }): string =>
      theme.colors.buttons.secondary.background};
    border: 1px solid
      ${({ theme }): string => theme.colors.buttons.secondary.border};
    color: ${({ theme }): string => theme.colors.buttons.secondary.color};

    :focus {
      box-shadow: ${({ theme }): string =>
        theme.colors.buttons.secondary.outline};
    }

    :focus,
    :hover {
      border-color: ${({ theme }): string =>
        theme.colors.buttons.secondary.borderHover};
    }

    :active {
      background-color: ${({ theme }): string =>
        theme.colors.buttons.secondary.backgroundActive};
    }
  `,
};

const Button = styled.button<ButtonProps>`
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  outline: 0;
  padding: 0;
  position: relative;
  width: 100%;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    height: 50px;
  }

  ${({ variant }): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
    variants[variant]};
`;

export default Button;

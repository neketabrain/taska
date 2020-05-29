import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components";

import { ButtonProps } from "./Button.types";

const variants = {
  primary: css`
    color: ${({ theme }): string => theme.colors.buttons.primary.color};
    background-color: ${({ theme }): string =>
      theme.colors.buttons.primary.background};

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
    color: ${({ theme }): string => theme.colors.buttons.secondary.color};
    background-color: ${({ theme }): string =>
      theme.colors.buttons.secondary.background};
    border: 1px solid
      ${({ theme }): string => theme.colors.buttons.secondary.border};

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
  border: none;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media screen and (max-width: 480px) {
    height: 50px;
    font-size: 16px;
  }

  ${({ variant }): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
    variants[variant]};
`;

export default Button;

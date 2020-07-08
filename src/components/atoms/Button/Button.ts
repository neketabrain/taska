import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";

import { ButtonProps } from "./Button.types";

const variants = {
  primary: css`
    background-color: ${({ theme }): string => theme.colors.primary};
    color: ${({ theme }): string => theme.colors.foreground};

    :focus {
      box-shadow: ${({ theme }): string => theme.colors.primaryOutline};
    }

    :hover {
      background-color: ${({ theme }): string => theme.colors.primaryHover};
    }

    :active {
      background-color: ${({ theme }): string => theme.colors.primaryActive};
    }
  `,

  secondary: css`
    background-color: ${({ theme }): string => theme.colors.secondary};
    color: ${({ theme }): string => theme.colors.foreground};

    :focus {
      box-shadow: ${({ theme }): string => theme.colors.secondaryOutline};
    }

    :hover {
      background-color: ${({ theme }): string => theme.colors.secondaryHover};
    }

    :active {
      background-color: ${({ theme }): string => theme.colors.secondaryActive};
    }
  `,

  basic: css`
    background-color: ${({ theme }): string => theme.colors.foreground};
    border: 1px solid ${({ theme }): string => theme.colors.border};
    color: ${({ theme }): string => theme.colors.text};

    :focus {
      box-shadow: ${({ theme }): string => theme.colors.primaryOutline};
    }

    :active,
    :hover {
      background-color: ${({ theme }): string => theme.colors.foregroundHover};
    }
  `,
};

const Button = styled.button<ButtonProps>`
  align-items: center;
  border: none;
  border-radius: 10px;
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

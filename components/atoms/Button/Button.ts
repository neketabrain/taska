import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.types';

const variants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};

    :hover:not(:disabled):not(:focus) {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }

    :active,
    :focus {
      background-color: ${({ theme }) => theme.colors.primary};
      box-shadow: ${({ theme }) => theme.shadows.primary};
    }
  `,

  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};

    :hover:not(:disabled):not(:focus) {
      background-color: ${({ theme }) => theme.colors.secondaryDark};
    }

    :active,
    :focus {
      background-color: ${({ theme }) => theme.colors.secondary};
      box-shadow: ${({ theme }) => theme.shadows.secondary};
    }
  `,
};

const Button = styled.button<ButtonProps>`
  position: relative;
  width: 100%;
  display: flex;
  padding: 0;
  border: none;
  background-color: inherit;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.revertedText};
  transition: background-color ${({ theme }) => theme.transition}, box-shadow ${({ theme }) => theme.transition};

  :disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${({ variant = 'primary' }) => variants[variant]};
`;

export default Button;

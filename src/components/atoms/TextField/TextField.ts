import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components";

const TextField = styled.input<{ hasError?: boolean }>`
  position: relative;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }): string => theme.colors.inputBg};
  box-sizing: border-box;
  border: 1px solid ${({ theme }): string => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }): string => theme.colors.text};
  font-family: "Open Sans", sans-serif;
  padding: 0 16px;
  outline: 0;

  @media screen and (max-width: 480px) {
    height: 50px;
  }

  :focus {
    border-color: ${({ theme }): string => theme.colors.primary};
    background-color: ${({ theme }): string => theme.colors.bg};
  }

  :disabled {
    cursor: not-allowed;
    color: ${({ theme }): string => theme.colors.textDisabled};
  }

  :hover :not(:focus) :not(:disabled) {
    border-color: ${({ theme }): string => theme.colors.borderHover};
  }

  ${({
    hasError,
  }): FlattenInterpolation<ThemeProps<DefaultTheme>> | false | undefined =>
    hasError &&
    css`
      border-color: ${({ theme }): string => theme.colors.error} !important;
      background-color: ${({ theme }): string => theme.colors.errorBg};
    `};
`;

export default TextField;

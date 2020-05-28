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
  background-color: ${({ theme }): string => theme.colors.inputBackground};
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
    border-color: ${({ theme }): string => theme.colors.primaryDark};
    background-color: inherit;
  }

  :disabled {
    cursor: not-allowed;
    color: ${({ theme }): string => theme.colors.additionalText};
  }

  :hover :not(:focus) :not(:disabled) {
    border-color: ${({ theme }): string => theme.colors.borderDarker};
  }

  ${({
    hasError,
  }): FlattenInterpolation<ThemeProps<DefaultTheme>> | false | undefined =>
    hasError &&
    css`
      border-color: ${({ theme }): string => theme.colors.error} !important;
      background-color: ${({ theme }): string =>
        theme.colors.errorInputBackground};
    `};
`;

export default TextField;

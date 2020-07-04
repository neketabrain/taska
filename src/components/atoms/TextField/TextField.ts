import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";

const TextField = styled.input<{ hasError?: boolean }>`
  background-color: inherit;
  border: 1px solid ${({ theme }): string => theme.colors.border};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ theme }): string => theme.colors.text};
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  max-height: 40px;
  outline: 0;
  padding: 10px 16px;
  position: relative;
  width: 100%;

  @media screen and (max-width: 480px) {
    font-size: 16px;
    max-height: 50px;
    padding: 15px 16px;
  }

  :focus {
    border-color: ${({ theme }): string => theme.colors.secondary};
    box-shadow: ${({ theme }): string => theme.colors.outline};
  }

  :disabled {
    background-color: ${({ theme }): string =>
      theme.colors.disabledInputBackground};
    color: ${({ theme }): string => theme.colors.additionalText};
    cursor: not-allowed;
  }

  ${({
    hasError,
  }): FlattenInterpolation<ThemeProps<DefaultTheme>> | false | undefined =>
    hasError &&
    css`
      background-color: ${({ theme }): string =>
        theme.colors.errorInputBackground};
      border-color: ${({ theme }): string => theme.colors.error} !important;
    `};
`;

export default TextField;

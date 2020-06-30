import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";

const TextAreaField = styled.textarea<{ hasError?: boolean }>`
  background-color: inherit;
  border: 1px solid ${({ theme }): string => theme.colors.border};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ theme }): string => theme.colors.text};
  font-family: "Open Sans", sans-serif;
  outline: 0;
  padding: 10px 16px;
  position: relative;
  resize: none;
  width: 100%;

  @media screen and (max-width: 480px) {
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

export default TextAreaField;

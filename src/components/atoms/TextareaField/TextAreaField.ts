import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components";

const TextAreaField = styled.textarea<{ hasError?: boolean }>`
  position: relative;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }): string => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }): string => theme.colors.text};
  font-family: "Open Sans", sans-serif;
  padding: 10px 16px;
  outline: 0;
  background-color: inherit;
  resize: none;

  @media screen and (max-width: 480px) {
    height: 50px;
  }

  :focus {
    border-color: ${({ theme }): string => theme.colors.secondary};
    box-shadow: ${({ theme }): string => theme.colors.outline};
  }

  :disabled {
    cursor: not-allowed;
    color: ${({ theme }): string => theme.colors.additionalText};
    background-color: ${({ theme }): string =>
      theme.colors.disabledInputBackground};
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

export default TextAreaField;

import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";

const TextField = styled.input<{ hasError?: boolean }>`
  background-color: inherit;
  border: 1px solid ${({ theme }): string => theme.colors.border};
  border-radius: 10px;
  box-sizing: border-box;
  color: ${({ theme }): string => theme.colors.text};
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  max-height: 40px;
  outline: 0;
  padding: 10px 16px;
  position: relative;
  width: 100%;

  @media screen and (max-width: 700px) {
    font-size: 16px;
    max-height: 50px;
    padding: 15px 16px;
  }

  :focus {
    border-color: ${({ theme }): string => theme.colors.primary};
    box-shadow: ${({ theme }): string => theme.colors.primaryOutline};
  }

  :disabled {
    background-color: ${({ theme }): string => theme.colors.background};
    color: ${({ theme }): string => theme.colors.textSecondary};
    cursor: not-allowed;
  }

  ${({
    hasError,
  }): FlattenInterpolation<ThemeProps<DefaultTheme>> | false | undefined =>
    hasError &&
    css`
      background-color: ${({ theme }): string => theme.colors.errorOpacity};
      border-color: ${({ theme }): string => theme.colors.error} !important;

      :focus {
        box-shadow: ${({ theme }): string => theme.colors.errorOutline};
      }
    `};
`;

export default TextField;

import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";

import { Box, Icons, Text } from "src/components";

export const Wrapper = styled.li<{ isActive?: boolean }>`
  cursor: pointer;
  display: flex;
  margin: 0;
  outline-color: ${({ theme }): string => theme.colors.primaryOutline};
  padding: 12px 24px;
  position: relative;
  width: 100%;

  :hover {
    background-color: ${({ theme }): string => theme.colors.primaryLightest};
  }

  ${({
    isActive,
  }): FlattenInterpolation<ThemeProps<DefaultTheme>> | false | undefined =>
    isActive &&
    css`
      background-color: ${({ theme }): string => theme.colors.primaryLightest};
      border-right: 2px solid ${({ theme }): string => theme.colors.primaryDark};
    `};
`;

export const InfoContainer = styled(Box)`
  margin-left: 16px;
  width: 100%;
`;

export const Name = styled(Text)`
  margin: 0;
`;

export const Time = styled(Text)`
  align-items: center;
  color: ${({ theme }): string => theme.colors.primary};
  display: flex;
  font-size: 12px;
  margin: 4px 0 0;
`;

export const ClockIcon = styled(Icons.Clock)`
  fill: ${({ theme }): string => theme.colors.primary};
  height: 12px;
  margin-right: 4px;
  width: 12px;
`;

export const CheckIcon = styled(Icons.CircleCheck)`
  fill: ${({ theme }): string => theme.colors.buttons.primary.background};
  height: 24px;
  position: relative;
  width: 24px;
`;

export const FilledCheckIcon = styled(Icons.FilledCircleCheck)`
  fill: ${({ theme }): string => theme.colors.buttons.primary.background};
  height: 24px;
  position: relative;
  width: 24px;
`;

export const CheckButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0;
  outline-color: ${({ theme }): string => theme.colors.primaryOutline};
  padding: 0;
  position: relative;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :hover {
    ${CheckIcon}, ${FilledCheckIcon} {
      fill: ${({ theme }): string =>
        theme.colors.buttons.primary.backgroundHover};
    }
  }
`;

import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";

import { Text, Box, Icons } from "src/components";

export const Wrapper = styled.li<{ isActive?: boolean }>`
  margin: 0;
  padding: 12px 24px;
  width: 100%;
  position: relative;
  display: flex;
  outline-color: ${({ theme }): string => theme.colors.primaryOutline};
  cursor: pointer;

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
  width: 100%;
  margin-left: 16px;
`;

export const Name = styled(Text)`
  margin: 0;
`;

export const Time = styled(Text)`
  font-size: 12px;
  color: ${({ theme }): string => theme.colors.primary};
  margin: 4px 0 0;
  display: flex;
  align-items: center;
`;

export const ClockIcon = styled(Icons.Clock)`
  width: 12px;
  height: 12px;
  fill: ${({ theme }): string => theme.colors.primary};
  margin-right: 4px;
`;

export const CheckIcon = styled(Icons.CircleCheck)`
  position: relative;
  width: 24px;
  height: 24px;
  fill: ${({ theme }): string => theme.colors.buttons.primary.background};
`;

export const FilledCheckIcon = styled(Icons.FilledCircleCheck)`
  position: relative;
  width: 24px;
  height: 24px;
  fill: ${({ theme }): string => theme.colors.buttons.primary.background};
`;

export const CheckButton = styled.button`
  position: relative;
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  outline-color: ${({ theme }): string => theme.colors.primaryOutline};

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

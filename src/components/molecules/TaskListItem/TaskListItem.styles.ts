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
  outline: 0;
  padding: 12px 24px;
  position: relative;
  width: 100%;

  :hover,
  :focus {
    background-color: ${({ theme }): string => theme.colors.foregroundHover};
  }

  ${({
    isActive,
  }): FlattenInterpolation<ThemeProps<DefaultTheme>> | false | undefined =>
    isActive &&
    css`
      background-color: ${({ theme }): string => theme.colors.foregroundHover};
      border-right: 3px solid ${({ theme }): string => theme.colors.primary};
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
  color: ${({ theme }): string => theme.colors.textSecondary};
  display: flex;
  font-size: 12px;
  margin: 4px 0 0;
`;

export const ClockIcon = styled(Icons.Clock)`
  fill: ${({ theme }): string => theme.colors.textSecondary};
  height: 12px;
  margin-right: 4px;
  width: 12px;
`;

export const CheckIcon = styled(Icons.CheckCircle)`
  fill: ${({ theme }): string => theme.colors.textSecondary};
  height: 24px;
  position: relative;
  width: 24px;
`;

export const FilledCheckIcon = styled(Icons.CheckCircleFilled)`
  fill: ${({ theme }): string => theme.colors.primary};
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
  outline: 0;
  padding: 0;
  position: relative;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :focus {
    border-radius: 50%;
    box-shadow: ${({ theme }): string => theme.colors.primaryOutline};
  }

  :hover {
    ${CheckIcon}, ${FilledCheckIcon} {
      fill: ${({ theme }): string => theme.colors.primaryHover};
    }
  }

  :active {
    ${CheckIcon}, ${FilledCheckIcon} {
      fill: ${({ theme }): string => theme.colors.primaryActive};
    }
  }
`;

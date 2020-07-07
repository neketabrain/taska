import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";

import { Box, Flex, Icons, Link, Text } from "src/components";

export const Wrapper = styled(Box)`
  width: 100%;
`;

export const Container = styled(Box)`
  padding-top: 16px;
  width: 100%;
`;

export const Header = styled(Flex)<{ withBorder?: boolean }>`
  flex-direction: row;
  width: 100%;

  ${({
    withBorder,
    theme,
  }): FlattenInterpolation<ThemeProps<DefaultTheme>> | false | undefined =>
    withBorder &&
    css`
      border-bottom: 1px solid ${theme.colors.border};
      padding-bottom: 16px;
    `};
`;

export const NameContainer = styled(Box)`
  margin-left: 24px;
`;

export const Name = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

export const DateText = styled(Text)`
  align-items: center;
  color: ${({ theme }): string => theme.colors.primary};
  display: flex;
  font-size: 14px;
  margin: 4px 0 0;
`;

export const ClockIcon = styled(Icons.Clock)`
  fill: ${({ theme }): string => theme.colors.primary};
  height: 14px;
  margin-right: 4px;
  width: 14px;
`;

export const CheckIcon = styled(Icons.CircleCheck)`
  fill: ${({ theme }): string => theme.colors.buttons.primary.background};
  height: 36px;
  position: relative;
  width: 36px;
`;

export const FilledCheckIcon = styled(Icons.FilledCircleCheck)`
  fill: ${({ theme }): string => theme.colors.buttons.primary.background};
  height: 36px;
  position: relative;
  width: 36px;
`;

export const Description = styled(Text)`
  margin: 0;
  white-space: pre-line;
`;

export const PinIcon = styled(Icons.FilledPin)`
  fill: ${({ theme }): string => theme.colors.secondary};
  height: 16px;
  margin-right: 4px;
  position: relative;
  width: 16px;
`;

export const Time = styled(DateText)`
  margin-left: 16px;
`;

export const CalendarIcon = styled(Icons.Calendar)`
  fill: ${({ theme }): string => theme.colors.primary};
  height: 14px;
  margin-right: 4px;
  width: 14px;
`;

export const ButtonWrapper = styled(Box)`
  margin-left: auto;
`;

export const ButtonContainer = styled(Flex)`
  justify-content: space-between;
  margin-left: 16px;
  max-width: 65px;
  width: 100%;
`;

export const PenIcon = styled(Icons.FilledPen)`
  fill: ${({ theme }): string => theme.colors.border};
  height: 24px;
  width: 24px;
`;

export const TrashIcon = styled(Icons.FilledTrash)`
  fill: ${({ theme }): string => theme.colors.border};
  height: 24px;
  width: 24px;
`;

export const VerticalDivider = styled(Box)`
  background-color: ${({ theme }): string => theme.colors.border};
  height: 24px;
  margin: 0 8px;
  width: 1px;
`;

export const IconButton = styled.button`
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
    
    ${TrashIcon} {
      fill: ${({ theme }): string => theme.colors.primary};
    }
  }

  :hover {
    ${CheckIcon}, ${FilledCheckIcon}, ${TrashIcon} {
      fill: ${({ theme }): string =>
        theme.colors.buttons.primary.backgroundHover};
    }
  }
`;

export const EditButton = styled(Link)`
  color: ${({ theme }): string => theme.colors.border};
  fill: ${({ theme }): string => theme.colors.border};

  :hover {
    text-decoration: none;
    ${PenIcon} {
      fill: ${({ theme }): string =>
        theme.colors.buttons.primary.backgroundHover};
    }
  }
`;

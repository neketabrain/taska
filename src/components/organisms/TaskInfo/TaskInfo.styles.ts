import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";

import { Box, Flex, Text, Icons, Link } from "src/components";

export const Wrapper = styled(Box)`
  width: 100%;
`;

export const Container = styled(Box)`
  width: 100%;
  padding-top: 16px;
`;

export const Header = styled(Flex)<{ withBorder?: boolean }>`
  width: 100%;
  flex-direction: row;

  ${({
    withBorder,
    theme,
  }): FlattenInterpolation<ThemeProps<DefaultTheme>> | false | undefined =>
    withBorder &&
    css`
      padding-bottom: 16px;
      border-bottom: 1px solid ${theme.colors.border};
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
  font-size: 14px;
  color: ${({ theme }): string => theme.colors.primary};
  margin: 4px 0 0;
  display: flex;
  align-items: center;
`;

export const ClockIcon = styled(Icons.Clock)`
  width: 14px;
  height: 14px;
  fill: ${({ theme }): string => theme.colors.primary};
  margin-right: 4px;
`;

export const CheckIcon = styled(Icons.CircleCheck)`
  position: relative;
  width: 36px;
  height: 36px;
  fill: ${({ theme }): string => theme.colors.buttons.primary.background};
`;

export const FilledCheckIcon = styled(Icons.FilledCircleCheck)`
  position: relative;
  width: 36px;
  height: 36px;
  fill: ${({ theme }): string => theme.colors.buttons.primary.background};
`;

export const Description = styled(Text)`
  margin: 0;
  white-space: pre-line;
`;

export const PinIcon = styled(Icons.FilledPin)`
  width: 16px;
  height: 16px;
  position: relative;
  fill: ${({ theme }): string => theme.colors.secondary};
  margin-right: 4px;
`;

export const Time = styled(DateText)`
  margin-left: 16px;
`;

export const CalendarIcon = styled(Icons.Calendar)`
  width: 14px;
  height: 14px;
  fill: ${({ theme }): string => theme.colors.primary};
  margin-right: 4px;
`;

export const ButtonWrapper = styled(Box)`
  margin-left: auto;
`;

export const ButtonContainer = styled(Flex)`
  justify-content: space-between;
  margin-left: 16px;
  width: 100%;
  max-width: 65px;
`;

export const PenIcon = styled(Icons.FilledPen)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }): string => theme.colors.border};
`;

export const TrashIcon = styled(Icons.FilledTrash)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }): string => theme.colors.border};
`;

export const VerticalDivider = styled(Box)`
  width: 1px;
  height: 24px;
  margin: 0 8px;
  background-color: ${({ theme }): string => theme.colors.border};
`;

export const IconButton = styled.button`
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
  fill: ${({ theme }): string => theme.colors.border};
  color: ${({ theme }): string => theme.colors.border};

  :hover {
    text-decoration: none;
    ${PenIcon} {
      fill: ${({ theme }): string =>
        theme.colors.buttons.primary.backgroundHover};
    }
  }
`;

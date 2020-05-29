import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.li`
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const Link = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  padding: 0 8px;
  border-radius: 4px;
  color: ${({ theme }): string => theme.colors.buttons.primary.background};
  text-decoration: none;

  :hover {
    background-color: ${({ theme }): string => theme.colors.border};
    color: ${({ theme }): string =>
      theme.colors.buttons.primary.backgroundHover};

    svg {
      fill: ${({ theme }): string =>
        theme.colors.buttons.primary.backgroundHover};
    }
  }

  svg {
    fill: ${({ theme }): string => theme.colors.buttons.primary.background};
    width: 20px;
    height: 20px;
    margin-right: 16px;
  }

  &.active {
    color: ${({ theme }): string => theme.colors.text};
    font-weight: 600;
    background-color: ${({ theme }): string => theme.colors.border};

    svg {
      fill: ${({ theme }): string => theme.colors.text};
    }
  }
`;

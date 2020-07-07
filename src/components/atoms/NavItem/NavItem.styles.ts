import styled from "styled-components";

import { Link } from "../Link";

export const Container = styled.li`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
`;

export const NavLink = styled(Link)`
  border-radius: 4px;
  color: ${({ theme }): string => theme.colors.buttons.primary.background};
  height: 32px;
  padding: 0 8px;
  width: 100%;

  :hover {
    background-color: ${({ theme }): string => theme.colors.border};
    color: ${({ theme }): string =>
      theme.colors.buttons.primary.backgroundHover};
    text-decoration: none;

    svg {
      fill: ${({ theme }): string =>
        theme.colors.buttons.primary.backgroundHover};
    }
  }

  :focus {
    border-radius: 4px;
    box-shadow: ${({ theme }): string => theme.colors.buttons.primary.outline};
  }

  svg {
    fill: ${({ theme }): string => theme.colors.buttons.primary.background};
    height: 20px;
    margin-right: 16px;
    width: 20px;
  }

  &.active {
    background-color: ${({ theme }): string => theme.colors.border};
    color: ${({ theme }): string => theme.colors.text};
    font-weight: 600;

    svg {
      fill: ${({ theme }): string => theme.colors.text};
    }
  }
`;

import styled from "styled-components";

import { Link } from "../Link";

export const Container = styled.li`
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const NavLink = styled(Link)`
  width: 100%;
  height: 32px;
  padding: 0 8px;
  border-radius: 4px;
  color: ${({ theme }): string => theme.colors.buttons.primary.background};

  :hover {
    text-decoration: none;
    background-color: ${({ theme }): string => theme.colors.border};
    color: ${({ theme }): string =>
      theme.colors.buttons.primary.backgroundHover};

    svg {
      fill: ${({ theme }): string =>
        theme.colors.buttons.primary.backgroundHover};
    }
  }

  :focus {
    box-shadow: ${({ theme }): string => theme.colors.buttons.primary.outline};
    border-radius: 4px;
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

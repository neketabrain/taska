import styled from "styled-components";

import { Link } from "../Link";

export const Container = styled.li`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
`;

export const NavLink = styled(Link)`
  border-radius: 10px;
  color: ${({ theme }): string => theme.colors.textSecondary};
  height: 32px;
  padding: 0 8px;
  width: 100%;

  :hover,
  :focus {
    background-color: ${({ theme }): string => theme.colors.backgroundHover};
    text-decoration: none;
    border-radius: 10px;
    box-shadow: none;
  }

  svg {
    fill: ${({ theme }): string => theme.colors.textSecondary};
    height: 20px;
    margin-right: 16px;
    width: 20px;
  }

  &.active {
    color: ${({ theme }): string => theme.colors.text};
    font-weight: 600;

    svg {
      fill: ${({ theme }): string => theme.colors.text};
    }
  }
`;

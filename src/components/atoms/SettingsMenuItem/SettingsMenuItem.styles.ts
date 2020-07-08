import styled from "styled-components";

import { Link } from "../Link";

export const Container = styled.li`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
`;

export const NavLink = styled(Link)`
  box-sizing: border-box;
  color: ${({ theme }): string => theme.colors.text};
  height: 45px;
  padding: 0 24px;
  width: 100%;

  :hover,
  :focus {
    background-color: ${({ theme }): string => theme.colors.foregroundHover};
    text-decoration: none;
    box-shadow: none;
  }

  &.active {
    background-color: ${({ theme }): string => theme.colors.foregroundHover};
    border-right: 3px solid ${({ theme }): string => theme.colors.primary};
  }
`;

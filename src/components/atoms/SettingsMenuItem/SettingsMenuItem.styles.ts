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
  height: 45px;
  color: ${({ theme }): string => theme.colors.text};
  box-sizing: border-box;
  padding: 0 24px;

  :hover {
    text-decoration: none;
    background-color: ${({ theme }): string => theme.colors.primaryLightest};
  }

  :focus {
    box-shadow: ${({ theme }): string => theme.colors.buttons.primary.outline};
  }

  &.active {
    background-color: ${({ theme }): string => theme.colors.primaryLightest};
    border-right: 2px solid ${({ theme }): string => theme.colors.primaryDark};
  }
`;

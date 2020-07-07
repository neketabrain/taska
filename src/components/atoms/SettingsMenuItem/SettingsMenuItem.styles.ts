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

  :hover {
    background-color: ${({ theme }): string => theme.colors.primaryLightest};
    text-decoration: none;
  }

  :focus {
    box-shadow: ${({ theme }): string => theme.colors.buttons.primary.outline};
  }

  &.active {
    background-color: ${({ theme }): string => theme.colors.primaryLightest};
    border-right: 2px solid ${({ theme }): string => theme.colors.primaryDark};
  }
`;

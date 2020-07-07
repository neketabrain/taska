import styled from "styled-components";

import { Box, NavItem } from "src/components";

export const Container = styled.nav`
  position: relative;
  width: 100%;
`;

export const NavItemList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
`;

export const Divider = styled(Box)`
  background-color: ${({ theme }): string => theme.colors.borderDarker};
  height: 1px;
  margin: 16px 0 16px 44px;
  position: relative;
  width: 100% - 44px;
`;

export const MenuItem = styled(NavItem)`
  :not(:first-of-type) {
    margin-top: 6px;
  }
`;

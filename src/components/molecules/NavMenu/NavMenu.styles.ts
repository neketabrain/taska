import styled from "styled-components";

import { Box } from "src/components";

export const Container = styled.nav`
  position: relative;
  width: 100%;
`;

export const NavItemList = styled.ul`
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const Divider = styled(Box)`
  position: relative;
  width: 100% - 44px;
  margin: 16px 0 16px 44px;
  height: 1px;
  background-color: ${({ theme }): string => theme.colors.borderDarker};
`;

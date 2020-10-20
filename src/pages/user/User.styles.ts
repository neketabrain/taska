import styled from "styled-components";

import { Flex, NavMenu } from "src/components";

export const Wrapper = styled(Flex)`
  flex-direction: row;
  height: calc(100% - 60px - 16px);
  margin: 0 auto;
  min-height: 500px;
  padding: 0 16px;
  position: relative;
  width: 100%;
`;

export const LeftSideContainer = styled.aside`
  margin-right: 16px;
  max-width: 250px;
  position: relative;
  width: 100%;
`;

export const Menu = styled(NavMenu)`
  margin-top: 32px;
`;

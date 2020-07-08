import styled from "styled-components";

import { Flex, NavMenu } from "src/components";

export const Wrapper = styled(Flex)`
  flex-direction: row;
  height: 100%;
  margin: 0 auto;
  min-height: 500px;
  padding: 0 32px;
  position: relative;
  width: 100%;

  @media screen and (max-width: 480px) {
    padding: 0 24px;
  }

  @media screen and (max-width: 360px) {
    padding: 0 16px;
  }
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

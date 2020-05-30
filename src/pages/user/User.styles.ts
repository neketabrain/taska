import styled from "styled-components";

import { Flex, NavMenu } from "src/components";

export const Wrapper = styled(Flex)`
  position: relative;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  padding: 16px 32px 60px;

  @media screen and (max-width: 480px) {
    padding: 16px 24px 60px;
  }

  @media screen and (max-width: 360px) {
    padding: 16px 16px 60px;
  }
`;

export const LeftSideContainer = styled.aside`
  position: relative;
  max-width: 250px;
  width: 100%;
  margin-right: 16px;
`;

export const Menu = styled(NavMenu)`
  margin-top: 32px;
`;

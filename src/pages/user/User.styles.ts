import styled from "styled-components";

import { Flex } from "src/components";

export const Wrapper = styled(Flex)`
  position: relative;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  padding: 16px 32px 60px;
`;

export const LeftSideContainer = styled.aside`
  position: relative;
  max-width: 250px;
  width: 100%;
  margin-right: 16px;
`;

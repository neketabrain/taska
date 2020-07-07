import styled from "styled-components";

import { Box, ButtonLink, Text } from "src/components";

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
`;

export const EmptyContainer = styled(Box)`
  padding: 0 24px;
  width: 100%;
`;

export const EmptyText = styled(Text)`
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

export const Button = styled(ButtonLink)`
  margin-top: 16px;
`;

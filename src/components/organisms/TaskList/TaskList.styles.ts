import styled from "styled-components";

import { Text, Box, ButtonLink } from "src/components";

export const List = styled.ul`
  padding: 0;
  margin: 0;
  position: relative;
  width: 100%;
  list-style-type: none;
`;

export const EmptyContainer = styled(Box)`
  width: 100%;
  padding: 0 24px;
`;

export const EmptyText = styled(Text)`
  text-align: center;
  font-weight: 600;
  margin: 0;
`;

export const Button = styled(ButtonLink)`
  margin-top: 16px;
`;

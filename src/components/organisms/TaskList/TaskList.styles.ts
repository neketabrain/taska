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

export const DateContainer = styled(Box)`
  border-bottom: 1px solid ${({ theme }): string => theme.colors.border};
  padding: 0 24px 12px;
  width: 100%;

  :not(:first-of-type) {
    margin-top: 24px;
  }
`;

export const DateText = styled(Text)`
  color: ${({ theme }): string => theme.colors.textSecondary};
  font-weight: 600;
  margin: 0;
`;

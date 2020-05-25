import styled from "styled-components";

import { Box, H1, Link, Icons } from "src/components";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  align-items: baseline;
`;

export const Title = styled(H1)`
  max-width: 65%;
  margin: 0;
`;

export const LoginLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
`;

export const ChevronIcon = styled(Icons.ChevronRight)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }): string => theme.colors.secondary};
  vertical-align: sub;
`;

export const DividerContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  position: relative;
`;

export const Divider = styled(Box)`
  height: 1px;
  width: 100%;
  max-width: 124px;
  background-color: ${({ theme }): string => theme.colors.border};
`;

export const GoogleIcon = styled(Icons.Google)`
  width: 20px;
  height: 20px;
  margin-right: 16px;
`;

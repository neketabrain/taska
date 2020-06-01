import styled from "styled-components";

import { Card, H1 } from "src/components";

export const Wrapper = styled.main`
  position: relative;
  width: 100%;
  display: flex;
`;

export const MenuContainer = styled(Card)`
  padding: 24px 0;
`;

export const Title = styled(H1)`
  padding: 0 24px;
  margin-bottom: 32px;
`;

export const MenuSection = styled.section`
  position: relative;
  max-width: 350px;
  width: 100%;
  margin-right: 16px;
`;

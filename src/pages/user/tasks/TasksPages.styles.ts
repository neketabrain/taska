import styled from "styled-components";

import { H1 } from "src/components";

export const Wrapper = styled.main`
  position: relative;
  width: 100%;
  display: flex;
`;

export const Title = styled(H1)`
  margin-bottom: 32px;
`;

export const PrimarySection = styled.section`
  position: relative;
  max-width: 460px;
  width: 100%;
`;

export const SecondarySection = styled(PrimarySection)`
  max-width: 350px;
`;

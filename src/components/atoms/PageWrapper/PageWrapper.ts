import styled from "styled-components";

import { Box } from "../Box";

const PageWrapper = styled(Box)`
  flex: 1 0 auto;
  margin: 0 auto;
  max-width: 1152px;
  min-height: 100%;
  padding: 16px 0;
  width: 100%;

  @media screen and (max-width: 700px) {
    padding: 0;
  }
`;

export default PageWrapper;

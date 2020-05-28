import styled from "styled-components";

import { Box } from "../Box";

const Card = styled(Box)`
  background-color: ${({ theme }): string => theme.colors.cardBackground};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 24px;
`;

export default Card;

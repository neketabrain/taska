import styled from "styled-components";

import { Box } from "../Box";

const Card = styled(Box)`
  background-color: ${({ theme }): string => theme.colors.cardBackground};
  border-radius: 4px;
  box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
  padding: 24px;
`;

export default Card;

import styled from "styled-components";

import { Box } from "../Box";

const Card = styled(Box)`
  background-color: ${({ theme }): string => theme.colors.foreground};
  border-radius: 14px;
  box-shadow: ${({ theme }): string => theme.colors.cardBoxShadow};
  padding: 24px;
`;

export default Card;

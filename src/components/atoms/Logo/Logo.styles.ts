import styled from "styled-components";

import { H1 } from "../H1";

export const LogoText = styled(H1)`
  color: ${({ theme }): string => theme.colors.invertedText};
  font-weight: bold;
`;

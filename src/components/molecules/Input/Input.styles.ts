import styled from "styled-components";

import { Box, TextField } from "src/components";

export const InputContainer = styled(Box)`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  color: ${({ theme }): string => theme.colors.text};
`;

export const Field = styled(TextField)`
  margin-top: 8px;
`;

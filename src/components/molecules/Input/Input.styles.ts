import styled from "styled-components";

import { Box, TextField, Text } from "src/components";

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

export const Error = styled(Text)`
  font-size: 12px;
  color: ${({ theme }): string => theme.colors.error};
  margin: 8px 0 0;
`;

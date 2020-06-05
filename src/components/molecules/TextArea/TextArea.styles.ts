import styled from "styled-components";

import { Box, TextAreaField, Text } from "src/components";

export const TextAreaContainer = styled(Box)`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  font-family: "Open Sans", sans-serif;
  color: ${({ theme }): string => theme.colors.text};
`;

export const Field = styled(TextAreaField)`
  margin-top: 8px;
  height: auto;
`;

export const Error = styled(Text)`
  font-size: 12px;
  color: ${({ theme }): string => theme.colors.error};
  margin: 4px 0 0;
`;

import styled from "styled-components";

import { Box, Text, TextAreaField } from "src/components";

export const TextAreaContainer = styled(Box)`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }): string => theme.colors.text};
  font-family: "Open Sans", sans-serif;
`;

export const Field = styled(TextAreaField)`
  height: auto;
  margin-top: 8px;
`;

export const Error = styled(Text)`
  color: ${({ theme }): string => theme.colors.error};
  font-size: 12px;
  margin: 4px 0 0;
`;

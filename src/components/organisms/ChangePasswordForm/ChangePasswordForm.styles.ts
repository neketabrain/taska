import styled from "styled-components";

import { Box, Button } from "src/components";

export const Form = styled.form`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
`;

export const InputContainer = styled(Box)`
  :not(:first-of-type) {
    margin-top: 16px;
  }
`;

export const SubmitButton = styled(Button)`
  margin-top: 24px;

  @media screen and (max-width: 480px) {
    margin-top: 40px;
  }
`;

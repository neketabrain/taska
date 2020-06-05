import styled from "styled-components";

import { Box, Button } from "src/components";

export const Form = styled.form`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const InputContainer = styled(Box)`
  :not(:first-of-type) {
    margin-top: 16px;
  }
`;

export const SubmitButton = styled(Button)`
  max-width: 150px;
  margin-top: 24px;

  @media screen and (max-width: 480px) {
    max-width: 200px;
    width: 50%;
    margin-top: 40px;
  }
`;

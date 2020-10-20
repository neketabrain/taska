import styled from "styled-components";

import { Box, Flex, Button } from "src/components";

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

export const ButtonContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  @media screen and (max-width: 700px) {
    margin-top: 28px;
  }
`;

export const SubmitButton = styled(Button)`
  max-width: 128px;

  @media screen and (max-width: 700px) {
    max-width: 180px;
    width: 50%;
  }
`;

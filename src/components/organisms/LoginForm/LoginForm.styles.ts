import styled from "styled-components";

import { Box, Flex, Button } from "src/components";

export const Form = styled.form`
  position: relative;
  padding: 0;
  margin: 0;
  max-width: 320px;
  width: 100%;
`;

export const InputContainer = styled(Box)`
  :not(:first-of-type) {
    margin-top: 16px;
  }
`;

export const CheckBoxContainer = styled(Box)`
  margin-top: 24px;
`;

export const ButtonContainer = styled(Flex)`
  margin-top: 24px;
  justify-content: space-between;
  align-items: center;
`;

export const SubmitButton = styled(Button)`
  max-width: 128px;
`;

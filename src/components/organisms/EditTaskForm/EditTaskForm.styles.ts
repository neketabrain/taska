import styled from "styled-components";

import { Box, Button as CustomButton, Flex } from "src/components";

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

export const ButtonContainer = styled(Flex)`
  margin-top: 24px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    margin-top: 40px;
  }
`;

export const Button = styled(CustomButton)`
  max-width: 150px;

  @media screen and (max-width: 480px) {
    max-width: 200px;
    width: 50%;
  }
`;

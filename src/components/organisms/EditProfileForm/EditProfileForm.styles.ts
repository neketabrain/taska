import styled from "styled-components";

import { Box, Button, Flex } from "src/components";

export const Form = styled.form`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const FlexContainer = styled(Flex)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const AvatarContainer = styled(Flex)`
  width: 100%;
  max-width: 120px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Picture = styled.picture`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 120px;
  width: 100%;
  max-height: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid ${({ theme }): string => theme.colors.border};
  margin: 0;
`;

export const AvatarLabel = styled.label`
  color: ${({ theme }): string => theme.colors.text};
  text-align: center;
`;

export const InputsContainer = styled(Box)`
  margin-left: 24px;
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

export const UserAvatar = styled.img`
  max-width: 120px;
  width: 100%;
  max-height: 120px;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 50%;
`;

export const MockAvatar = styled(Box)`
  max-width: 120px;
  width: 100%;
  max-height: 120px;
  height: 120px;
  background-color: ${({ theme }): string => theme.colors.primary};
  border-radius: 50%;
  color: ${({ theme }): string => theme.colors.invertedText};
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

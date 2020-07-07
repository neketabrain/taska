import styled from "styled-components";

import { Box, Button, Flex } from "src/components";

export const Form = styled.form`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
`;

export const FlexContainer = styled(Flex)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const AvatarContainer = styled(Flex)`
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  max-width: 120px;
  width: 100%;
`;

export const Picture = styled.picture`
  align-items: center;
  border: 1px solid ${({ theme }): string => theme.colors.border};
  border-radius: 50%;
  display: flex;
  height: 120px;
  justify-content: center;
  margin: 0;
  max-height: 120px;
  max-width: 120px;
  overflow: hidden;
  position: relative;
  width: 100%;
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
  border-radius: 50%;
  height: 100%;
  max-height: 120px;
  max-width: 120px;
  object-fit: cover;
  position: relative;
  width: 100%;
`;

export const MockAvatar = styled(Box)`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.primary};
  border-radius: 50%;
  color: ${({ theme }): string => theme.colors.foreground};
  display: flex;
  font-size: 24px;
  font-weight: 600;
  height: 120px;
  justify-content: center;
  max-height: 120px;
  max-width: 120px;
  text-transform: uppercase;
  width: 100%;
`;

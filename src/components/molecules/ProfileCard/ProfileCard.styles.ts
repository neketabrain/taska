import styled from "styled-components";

import { Card, Text } from "src/components";

export const Container = styled(Card)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Picture = styled.picture`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const UserName = styled(Text)`
  text-align: center;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

export const UserEmail = styled(UserName)`
  margin-top: 4px;
  color: ${({ theme }): string => theme.colors.primary};
  font-weight: normal;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const UserAvatar = styled.img`
  max-width: 100px;
  width: 100%;
  max-height: 100px;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 50%;
  border: 1px solid ${({ theme }): string => theme.colors.border};
`;

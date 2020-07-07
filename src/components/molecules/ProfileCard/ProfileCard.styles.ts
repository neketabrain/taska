import styled from "styled-components";

import { Box, Card, Text } from "src/components";

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const Picture = styled.picture`
  align-items: center;
  border: 1px solid ${({ theme }): string => theme.colors.border};
  border-radius: 50%;
  display: flex;
  height: 100px;
  justify-content: center;
  margin: 0 auto 16px;
  max-height: 100px;
  max-width: 100px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const UserName = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

export const UserEmail = styled(UserName)`
  color: ${({ theme }): string => theme.colors.textSecondary};
  font-size: 14px;
  font-weight: normal;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  height: 100%;
  max-height: 100px;
  max-width: 100px;
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
  height: 100px;
  justify-content: center;
  max-height: 100px;
  max-width: 100px;
  text-transform: uppercase;
  width: 100%;
`;

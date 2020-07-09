import styled from "styled-components";

import { Box, Card, Flex, H1, Text } from "src/components";

export const Wrapper = styled.main`
  display: flex;
  position: relative;
  width: 100%;
`;

export const Container = styled(Card)`
  padding: 24px 0;
`;

export const Title = styled(H1)<{ decreasedMargin?: boolean }>`
  margin-bottom: ${({ decreasedMargin }): string =>
    (decreasedMargin && "16px") || "32px"};
  padding: 0 24px;
`;

export const MenuSection = styled.section`
  margin-right: 16px;
  max-width: 350px;
  position: relative;
  width: 100%;
`;

export const ContentSection = styled.section`
  max-width: 460px;
  position: relative;
  width: 100%;
`;

export const ContentWrapper = styled(Box)`
  padding: 0 24px;
`;

export const AlertContainer = styled(Flex)`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.secondaryOpacity};
  color: ${({ theme }): string => theme.colors.secondary};
  font-weight: 600;
  justify-content: center;
  margin-bottom: 16px;
  padding: 12px 24px;
  text-align: center;
  width: 100%;
`;

export const FieldContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: 100%;

  :not(:first-of-type) {
    margin-top: 16px;
  }
`;

export const FieldLabel = styled(Text)`
  margin: 0 16px 0 0;
  font-weight: 600;
`;

export const FieldHandler = styled(Flex)`
  align-items: center;
  justify-content: center;
  min-width: 210px;
  width: 210px;
`;

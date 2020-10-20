import styled from "styled-components";

import { Box, Card, Flex, H1, Text } from "src/components";

const Wrapper = styled.main`
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

export const ContentSection = styled.section`
  position: relative;
  width: 100%;
`;

export const MenuSection = styled(ContentSection)`
  flex-grow: 1;
  margin-right: 16px;
  max-width: 350px;
  width: 100%;

  @media screen and (max-width: 1151px) {
    max-width: 100%;
  }
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

export const DesktopContainer = styled(Wrapper)`
  @media screen and (max-width: 1151px) {
    display: none;
  }
`;

export const MobileContainer = styled(Wrapper)`
  display: none;

  @media screen and (max-width: 1151px) {
    display: block;
  }
`;

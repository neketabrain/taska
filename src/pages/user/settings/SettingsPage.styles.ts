import styled from "styled-components";

import { Flex, Box, Card, H1 } from "src/components";

export const Wrapper = styled.main`
  position: relative;
  width: 100%;
  display: flex;
`;

export const Container = styled(Card)`
  padding: 24px 0;
`;

export const Title = styled(H1)<{ decreasedMargin?: boolean }>`
  padding: 0 24px;
  margin-bottom: ${({ decreasedMargin }): string =>
    (decreasedMargin && "16px") || "32px"};
`;

export const MenuSection = styled.section`
  position: relative;
  max-width: 350px;
  width: 100%;
  margin-right: 16px;
`;

export const ContentSection = styled.section`
  position: relative;
  max-width: 460px;
  width: 100%;
`;

export const FormWrapper = styled(Box)`
  padding: 0 24px;
`;

export const AlertContainer = styled(Flex)`
  width: 100%;
  margin-bottom: 16px;
  background-color: ${({ theme }): string => theme.colors.opacitySuccessful};
  color: ${({ theme }): string => theme.colors.successfulText};
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 12px 24px;
`;

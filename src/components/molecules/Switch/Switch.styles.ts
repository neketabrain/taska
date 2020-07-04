import styled from "styled-components";

import { Flex, Text } from "src/components";

export const Wrapper = styled(Flex)`
  align-items: center;
  height: 20px;
`;

export const LeftLabel = styled(Text)`
  margin: 0 8px 0 0;
  min-width: 60px;
  text-align: right;
`;

export const RightLabel = styled(LeftLabel)`
  margin: 0 0 0 8px;
  text-align: left;
`;

export const SwitchContainer = styled.label`
  display: inline-block;
  height: 100%;
  position: relative;
  width: 48px;
`;

export const Switcher = styled.span`
  background-color: ${({ theme }): string => theme.colors.primary};
  border: 1px solid ${({ theme }): string => theme.colors.border};
  border-radius: 4px;
  bottom: 0;
  box-sizing: border-box;
  cursor: pointer;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;

  :before {
    background-color: ${({ theme }): string => theme.colors.cardBackground};
    border-radius: 2px;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    transition: transform 0.4s;
    width: 20px;
  }
`;

export const NativeInput = styled.input`
  height: 0;
  opacity: 0;
  width: 0;

  :focus + ${Switcher} {
    border-color: ${({ theme }): string => theme.colors.secondary};
    box-shadow: ${({ theme }): string => theme.colors.outline};
  }

  :checked + ${Switcher}:before {
    transform: translateX(26px);
  }

  :disabled + ${Switcher} {
    background-color: ${({ theme }): string => theme.colors.borderDarker};
    cursor: not-allowed;

    :before {
      background-color: ${({ theme }): string =>
        theme.colors.disabledInputBackground};
    }
  }
`;

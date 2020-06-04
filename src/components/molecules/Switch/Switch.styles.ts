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
  position: relative;
  height: 100%;
  width: 48px;
  display: inline-block;
`;

export const Switcher = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ theme }): string => theme.colors.border};
  box-sizing: border-box;

  :before {
    position: absolute;
    content: "";
    height: 100%;
    width: 20px;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }): string => theme.colors.primary};
    transition: transform 0.4s;
    border-radius: 2px;
  }
`;

export const NativeInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :focus + ${Switcher} {
    border-color: ${({ theme }): string => theme.colors.secondary};
    box-shadow: ${({ theme }): string => theme.colors.outline};
  }

  :checked + ${Switcher}:before {
    transform: translateX(26px);
  }

  :disabled + ${Switcher} {
    cursor: not-allowed;
    background-color: ${({ theme }): string =>
      theme.colors.disabledInputBackground};

    :before {
      background-color: ${({ theme }): string => theme.colors.borderDarker};
    }
  }
`;

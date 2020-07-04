import styled from "styled-components";

import { Box, Icons } from "../../atoms";

export const CheckBoxContainer = styled(Box)`
  display: inline-block;
`;

export const CheckIcon = styled(Icons.Check)`
  display: none;
  fill: ${({ theme }): string => theme.colors.text};
  height: 16px;
  left: 1px;
  position: absolute;
  top: 1px;
  width: 16px;
  z-index: 2;

  @media screen and (max-width: 480px) {
    height: 18px;
    left: 2px;
    top: 2px;
    width: 18px;
  }
`;

export const NativeCheckbox = styled.input`
  clip: rect(0 0 0 0);
  height: 1px;
  margin: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;

  :checked ~ ${CheckIcon} {
    display: inline-block;
  }

  :disabled ~ ${CheckIcon} {
    fill: ${({ theme }): string => theme.colors.additionalText};
  }
`;

export const CustomCheckbox = styled.div`
  background-color: inherit;
  border: 1px solid ${({ theme }): string => theme.colors.border};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  height: 18px;
  margin-right: 16px;
  width: 18px;

  @media screen and (max-width: 480px) {
    height: 22px;
    width: 22px;
  }

  ${NativeCheckbox}:focus + & {
    border-color: ${({ theme }): string => theme.colors.secondary};
    box-shadow: ${({ theme }): string => theme.colors.outline};
  }

  ${NativeCheckbox}:disabled + & {
    background-color: ${({ theme }): string =>
      theme.colors.disabledInputBackground};
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  align-items: center;
  color: ${({ theme }): string => theme.colors.text};
  display: flex;
  font-family: "Open Sans", sans-serif;
  line-height: 18px;
  padding: 0;
  position: relative;
`;

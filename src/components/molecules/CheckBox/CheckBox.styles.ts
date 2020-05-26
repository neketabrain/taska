import styled from "styled-components";

import { Icons, Box } from "../../atoms";

export const CheckBoxContainer = styled(Box)`
  display: inline-block;
`;

export const CheckIcon = styled(Icons.Check)`
  width: 16px;
  height: 16px;
  fill: ${({ theme }): string => theme.colors.text};
  position: absolute;
  top: 1px;
  left: 1px;
  z-index: 2;

  @media screen and (max-width: 480px) {
    width: 18px;
    height: 18px;
    top: 2px;
    left: 2px;
  }
`;

export const NativeCheckbox = styled.input`
  border: 0;
  height: 0;
  overflow: hidden;
  padding: 0;
  opacity: 0;
  white-space: nowrap;
  width: 0;
  position: absolute;
  margin: 0;

  :disabled ~ ${CheckIcon} {
    fill: ${({ theme }): string => theme.colors.textDisabled};
  }
`;

export const CustomCheckbox = styled.div`
  display: inline-block;
  margin-right: 16px;
  width: 18px;
  height: 18px;
  background: ${({ theme }): string => theme.colors.inputBg};
  border: 1px solid ${({ theme }): string => theme.colors.border};
  box-sizing: border-box;
  border-radius: 4px;

  @media screen and (max-width: 480px) {
    width: 22px;
    height: 22px;
  }

  ${NativeCheckbox}:focus + & {
    border-color: ${({ theme }): string => theme.colors.text};
    background-color: ${({ theme }): string => theme.colors.bg};
  }

  ${NativeCheckbox}:disabled + & {
    cursor: not-allowed;
  }

  ${NativeCheckbox}:hover:not(:focus):not(:disabled) + & {
    border-color: ${({ theme }): string => theme.colors.borderHover};
  }
`;

export const Label = styled.label<{ disabled?: boolean }>`
  font-family: "Open Sans", sans-serif;
  position: relative;
  padding: 0;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: ${({ theme }): string => theme.colors.text};
  cursor: ${({ disabled }): string => (disabled && "not-allowed") || "pointer"};
`;

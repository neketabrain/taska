import styled from "styled-components";

import { Box } from "../Box";
import { Icons } from "../Icons";

export const CheckButtonContainer = styled(Box)`
  display: inline-block;
  height: 24px;
  width: 24px;
`;

export const CheckCircleIcon = styled(Icons.CheckCircle)`
  display: none;
  fill: ${({ theme }): string => theme.colors.textSecondary};
  height: 100%;
  position: relative;
  width: 100%;
`;

export const CheckCircleFilledIcon = styled(Icons.CheckCircleFilled)`
  display: none;
  fill: ${({ theme }): string => theme.colors.primary};
  height: 100%;
  position: relative;
  width: 100%;
`;

export const NativeCheckbox = styled.input`
  clip: rect(0 0 0 0);
  height: 100%;
  margin: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 2;

  :checked ~ ${CheckCircleFilledIcon} {
    display: inline-block;
  }

  :not(:checked) ~ ${CheckCircleIcon} {
    display: inline-block;
  }

  :disabled ~ ${CheckCircleIcon}, :disabled ~ ${CheckCircleFilledIcon} {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :not(:disabled) {
    :focus
      ~ ${CheckCircleIcon},
      :focus
      ~ ${CheckCircleFilledIcon},
      :hover
      ~ ${CheckCircleIcon},
      :hover
      ~ ${CheckCircleFilledIcon} {
      fill: ${({ theme }): string => theme.colors.primaryHover};
    }

    :active
      ~ ${CheckCircleIcon},
      :active
      ~ ${CheckCircleFilledIcon},
      :focus
      ~ ${CheckCircleIcon},
      :focus
      ~ ${CheckCircleFilledIcon} {
      border-radius: 50%;
      box-shadow: ${({ theme }): string => theme.colors.primaryOutline};
      fill: ${({ theme }): string => theme.colors.primaryActive};
    }
  }
`;

export const Label = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 0;
  position: relative;
  width: 100%;
`;

import styled from "styled-components";

import { Box } from "../Box";

export const LoaderContainer = styled(Box)`
  height: 12px;
  width: 72px;

  span {
    animation: loader 1.7s infinite ease-in-out both;
    background-color: ${({ theme }): string => theme.colors.primary};
    border-radius: 50%;
    height: 12px;
    margin-right: 5px;
    position: absolute;
    width: 12px;

    &:nth-child(1) {
      animation-delay: 0.6s;
      left: 0;
    }

    &:nth-child(2) {
      animation-delay: 0.4s;
      left: 20px;
    }

    &:nth-child(3) {
      animation-delay: 0.2s;
      left: 40px;
    }

    &:nth-child(4) {
      animation-delay: 0s;
      left: 60px;
    }

    @keyframes loader {
      0%,
      80%,
      100% {
        opacity: 0;
        transform: scale(0);
      }
      40% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;

import styled from "styled-components";

import { Box } from "../Box";

export const LoaderContainer = styled(Box)`
  height: 12px;
  width: 72px;

  span {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }): string => theme.colors.primary};
    animation: loader 1.7s infinite ease-in-out both;
    margin-right: 5px;

    &:nth-child(1) {
      left: 0;
      animation-delay: 0.6s;
    }

    &:nth-child(2) {
      left: 20px;
      animation-delay: 0.4s;
    }

    &:nth-child(3) {
      left: 40px;
      animation-delay: 0.2s;
    }

    &:nth-child(4) {
      left: 60px;
      animation-delay: 0s;
    }

    @keyframes loader {
      0%,
      80%,
      100% {
        transform: scale(0);
        opacity: 0;
      }
      40% {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;

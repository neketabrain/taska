import { ToastContainer as ReactToastify } from "react-toastify";
import styled from "styled-components";

import "react-toastify/dist/ReactToastify.css";

const ToastContainer = styled(ReactToastify)`
  .Toastify__toast {
    border-radius: 14px;
    color: ${({ theme }): string => theme.colors.foreground};
    font-family: "Open Sans", sans-serif;
    font-size: 14px;

    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }

  .Toastify__toast--error {
    background-color: ${({ theme }): string => theme.colors.error};
  }

  .Toastify__progress-bar {
    background-color: ${({ theme }): string => theme.colors.foreground};
    opacity: 0.5 !important;
  }

  .Toastify__close-button > svg {
    fill: ${({ theme }): string => theme.colors.foreground};
  }

  @media screen and (max-width: 480px) {
    padding: 8px;
  }
`;

export default ToastContainer;

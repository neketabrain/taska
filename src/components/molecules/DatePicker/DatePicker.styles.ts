import styled from "styled-components";

import { Box } from "src/components";

export const Wrapper = styled(Box)`
  width: 100%;

  .react-datepicker {
    background-color: ${({ theme }): string => theme.colors.foreground};
    border-color: ${({ theme }): string => theme.colors.border};
    border-radius: 14px;
    font-family: "Open Sans", sans-serif !important;
  }

  .react-datepicker-wrapper {
    position: relative;
    width: 100%;
  }

  .react-datepicker__header {
    background-color: ${({ theme }): string => theme.colors.background};
    border-color: ${({ theme }): string => theme.colors.border};
    border-radius: 14px 14px 0 0;
  }

  .react-datepicker__triangle {
    border-bottom-color: ${({ theme }): string =>
      theme.colors.background} !important;
    border-top-color: ${({ theme }): string =>
      theme.colors.background} !important;
    left: 50% !important;

    :before {
      border-bottom-color: ${({ theme }): string =>
        theme.colors.border} !important;
      border-top-color: ${({ theme }): string =>
        theme.colors.border} !important;
    }
  }

  .react-datepicker__navigation--previous {
    border-right-color: ${({ theme }): string => theme.colors.textSecondary};

    :hover {
      border-right-color: ${({ theme }): string => theme.colors.text};
    }
  }

  .react-datepicker__navigation--next {
    border-left-color: ${({ theme }): string => theme.colors.textSecondary};

    :hover {
      border-left-color: ${({ theme }): string => theme.colors.text};
    }
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header {
    color: ${({ theme }): string => theme.colors.text};
    text-transform: capitalize;
  }

  .react-datepicker__day-name {
    color: ${({ theme }): string => theme.colors.text};
  }

  .react-datepicker__day {
    color: ${({ theme }): string => theme.colors.text};

    :hover {
      background-color: ${({ theme }): string => theme.colors.backgroundHover};
    }
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }): string => theme.colors.primary};
    color: ${({ theme }): string => theme.colors.foreground};

    :hover {
      background-color: ${({ theme }): string => theme.colors.primary};
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${({ theme }): string => theme.colors.backgroundHover};
    color: ${({ theme }): string => theme.colors.text};

    :hover {
      background-color: ${({ theme }): string => theme.colors.backgroundHover};
    }
  }

  .react-datepicker__time {
    border-radius: 14px;
  }

  .react-datepicker__time-box {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .react-datepicker__time-list-item {
    background-color: ${({ theme }): string => theme.colors.foreground};
    color: ${({ theme }): string => theme.colors.text};

    :hover {
      background-color: ${({ theme }): string =>
        theme.colors.backgroundHover} !important;
    }
  }

  .react-datepicker__time-list-item--selected {
    background-color: ${({ theme }): string => theme.colors.primary} !important;

    :hover {
      background-color: ${({ theme }): string =>
        theme.colors.primary} !important;
    }
  }

  .react-datepicker__today-button {
    background-color: ${({ theme }): string => theme.colors.background};
    border-radius: 0 0 14px 14px;
    border-top-color: ${({ theme }): string => theme.colors.border};
    color: ${({ theme }): string => theme.colors.text};

    :hover {
      background-color: ${({ theme }): string => theme.colors.backgroundHover};
    }
  }

  .react-datepicker__close-icon {
    bottom: 0;
    font-weight: bold;
    height: 40px;
    padding: 0;
    right: 16px;
    top: initial;

    :after {
      background-color: ${({ theme }): string => theme.colors.primary};
      color: ${({ theme }): string => theme.colors.foreground};
    }

    :hover:after {
      background-color: ${({ theme }): string => theme.colors.primaryHover};
    }

    :active:after {
      background-color: ${({ theme }): string => theme.colors.primaryActive};
    }
  }
`;

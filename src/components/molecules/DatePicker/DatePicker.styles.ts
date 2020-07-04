import styled from "styled-components";

import { Box } from "src/components";

export const Wrapper = styled(Box)`
  width: 100%;

  .react-datepicker {
    background-color: ${({ theme }): string => theme.colors.cardBackground};
    border-color: ${({ theme }): string => theme.colors.borderDarkest};
    font-family: "Open Sans", sans-serif !important;
  }

  .react-datepicker-wrapper {
    position: relative;
    width: 100%;
  }

  .react-datepicker__header {
    background-color: ${({ theme }): string => theme.colors.primaryDarkest};
    border-bottom: none;
  }

  .react-datepicker__triangle {
    border-bottom-color: ${({ theme }): string =>
      theme.colors.primaryDarkest} !important;
    left: 50% !important;

    :before {
      border-bottom-color: ${({ theme }): string =>
        theme.colors.borderDarkest} !important;
    }
  }

  .react-datepicker__navigation--previous {
    border-right-color: ${({ theme }): string => theme.colors.borderDarkest};

    :hover {
      border-right-color: ${({ theme }): string => theme.colors.invertedText};
    }
  }

  .react-datepicker__navigation--next {
    border-left-color: ${({ theme }): string => theme.colors.borderDarkest};

    :hover {
      border-left-color: ${({ theme }): string => theme.colors.invertedText};
    }
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header {
    color: ${({ theme }): string => theme.colors.invertedText};
    text-transform: capitalize;
  }

  .react-datepicker__day-name {
    color: ${({ theme }): string => theme.colors.invertedText};
  }

  .react-datepicker__day {
    color: ${({ theme }): string => theme.colors.text};

    :hover {
      background-color: ${({ theme }): string => theme.colors.border};
    }
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }): string => theme.colors.primaryDark};
    color: ${({ theme }): string => theme.colors.invertedText};

    :hover {
      background-color: ${({ theme }): string => theme.colors.primaryDark};
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${({ theme }): string => theme.colors.primary};
    color: ${({ theme }): string => theme.colors.invertedText};

    :hover {
      background-color: ${({ theme }): string => theme.colors.primary};
    }
  }

  .react-datepicker__time-list-item {
    color: ${({ theme }): string => theme.colors.text};

    :hover {
      background-color: ${({ theme }): string =>
        theme.colors.border} !important;
    }

    &--selected {
      background-color: ${({ theme }): string =>
        theme.colors.primaryDark} !important;

      :hover {
        background-color: ${({ theme }): string =>
          theme.colors.primaryDark} !important;
      }
    }
  }

  .react-datepicker__today-button {
    background-color: ${({ theme }): string => theme.colors.border};
    border-radius: 0 0 4px 4px;
    border-top-color: ${({ theme }): string => theme.colors.borderDarkest};
    color: ${({ theme }): string => theme.colors.text};
  }

  .react-datepicker__close-icon {
    bottom: 0;
    font-weight: bold;
    height: 40px;
    padding: 0;
    right: 16px;
    top: initial;

    :after {
      background-color: ${({ theme }): string =>
        theme.colors.buttons.primary.background};
    }
    :hover:after {
      background-color: ${({ theme }): string =>
        theme.colors.buttons.primary.backgroundHover};
    }
  }
`;

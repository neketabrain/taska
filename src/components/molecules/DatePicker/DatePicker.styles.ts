import styled from "styled-components";

import { Box } from "src/components";

export const Wrapper = styled(Box)`
  width: 100%;

  .react-datepicker {
    border-color: ${({ theme }): string => theme.colors.borderDarkest};
    font-family: "Open Sans", sans-serif !important;
    background-color: ${({ theme }): string => theme.colors.cardBackground};
  }

  .react-datepicker-wrapper {
    width: 100%;
    position: relative;
  }

  .react-datepicker__header {
    background-color: ${({ theme }): string => theme.colors.primaryDarkest};
    border-bottom: none;
  }

  .react-datepicker__triangle {
    left: 50% !important;
    border-bottom-color: ${({ theme }): string =>
      theme.colors.primaryDarkest} !important;

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
    color: ${({ theme }): string => theme.colors.invertedText};
    background-color: ${({ theme }): string => theme.colors.primaryDark};

    :hover {
      background-color: ${({ theme }): string => theme.colors.primaryDark};
    }
  }

  .react-datepicker__day--keyboard-selected {
    color: ${({ theme }): string => theme.colors.invertedText};
    background-color: ${({ theme }): string => theme.colors.primary};

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
    border-top-color: ${({ theme }): string => theme.colors.borderDarkest};
    background-color: ${({ theme }): string => theme.colors.border};
    color: ${({ theme }): string => theme.colors.text};
    border-radius: 0 0 4px 4px;
  }

  .react-datepicker__close-icon {
    height: 40px;
    bottom: 0;
    top: initial;
    padding: 0;
    right: 16px;
    font-weight: bold;

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

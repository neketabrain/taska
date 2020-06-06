import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonLink = styled(NavLink)`
  position: relative;
  width: 100%;
  height: 40px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  color: ${({ theme }): string => theme.colors.buttons.primary.color};
  background-color: ${({ theme }): string =>
    theme.colors.buttons.primary.background};
  outline-color: ${({ theme }): string => theme.colors.primaryOutline};

  :hover {
    background-color: ${({ theme }): string =>
      theme.colors.buttons.primary.backgroundHover};
  }

  :active {
    background-color: ${({ theme }): string =>
      theme.colors.buttons.primary.backgroundActive};
  }
`;

export default ButtonLink;

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonLink = styled(NavLink)`
  align-items: center;
  background-color: ${({ theme }): string =>
    theme.colors.buttons.primary.background};
  border-radius: 4px;
  color: ${({ theme }): string => theme.colors.buttons.primary.color};
  cursor: pointer;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  outline-color: ${({ theme }): string => theme.colors.primaryOutline};
  padding: 0;
  position: relative;
  text-decoration: none;
  width: 100%;

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

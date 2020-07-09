import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonLink = styled(NavLink)`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.secondary};
  border-radius: 10px;
  color: ${({ theme }): string => theme.colors.foreground};
  cursor: pointer;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  outline: 0;
  padding: 0;
  position: relative;
  text-decoration: none;
  width: 100%;

  :hover {
    background-color: ${({ theme }): string => theme.colors.secondaryHover};
  }

  :active {
    background-color: ${({ theme }): string => theme.colors.secondaryActive};
  }

  :focus {
    box-shadow: ${({ theme }): string => theme.colors.secondaryOutline};
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    height: 50px;
  }
`;

export default ButtonLink;

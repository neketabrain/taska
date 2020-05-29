import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  position: relative;
  color: ${({ theme }): string => theme.colors.secondary};
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  outline: 0;

  :hover {
    text-decoration: underline;
  }

  :focus {
    box-shadow: ${({ theme }): string => theme.colors.outline};
    border-radius: 0.2em;
  }
`;

export default Link;

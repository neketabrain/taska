import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  align-items: center;
  color: ${({ theme }): string => theme.colors.secondary};
  display: flex;
  font-family: "Open Sans", sans-serif;
  outline: 0;
  position: relative;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }

  :focus {
    border-radius: 0.2em;
    box-shadow: ${({ theme }): string => theme.colors.outline};
  }
`;

export default Link;

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  color: ${({ theme }): string => theme.colors.secondary};
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;

  :hover {
    text-decoration: underline;
  }
`;

export default Link;

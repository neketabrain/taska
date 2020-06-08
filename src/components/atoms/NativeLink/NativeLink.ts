import styled from "styled-components";

const NativeLink = styled.a`
  position: relative;
  color: ${({ theme }): string => theme.colors.secondary};
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  outline-color: ${({ theme }): string => theme.colors.primaryOutline};
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export default NativeLink;

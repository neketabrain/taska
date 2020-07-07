import styled from "styled-components";

const NativeLink = styled.a`
  align-items: center;
  color: ${({ theme }): string => theme.colors.secondary};
  cursor: pointer;
  display: flex;
  font-family: "Open Sans", sans-serif;
  outline-color: ${({ theme }): string => theme.colors.primaryOutline};
  position: relative;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

export default NativeLink;

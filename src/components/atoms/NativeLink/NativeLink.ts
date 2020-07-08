import styled from "styled-components";

const NativeLink = styled.a`
  align-items: center;
  color: ${({ theme }): string => theme.colors.primary};
  cursor: pointer;
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
    box-shadow: ${({ theme }): string => theme.colors.primaryOutline};
  }
`;

export default NativeLink;

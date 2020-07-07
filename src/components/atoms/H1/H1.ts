import styled from "styled-components";

const H1 = styled.h1`
  color: ${({ theme }): string => theme.colors.text};
  font-family: "Open Sans", sans-serif;
  margin: 0;
`;

export default H1;

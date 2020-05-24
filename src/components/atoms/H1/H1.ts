import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Open Sans", sans-serif;
  color: ${({ theme }): string => theme.colors.text};
  font-size: 28px;
  margin: 0;
`;

export default H1;
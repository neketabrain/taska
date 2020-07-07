import styled from "styled-components";
import {
  color,
  compose,
  layout,
  position,
  space,
  typography,
} from "styled-system";

const Text = styled.p`
  color: ${({ theme }): string => theme.colors.text};
  font-family: "Open Sans", sans-serif;
  ${compose(color, layout, position, space, typography)};
`;

export default Text;

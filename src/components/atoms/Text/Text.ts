import styled from "styled-components";
import {
  compose,
  space,
  color,
  typography,
  layout,
  position,
} from "styled-system";

const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  color: ${({ theme }): string => theme.colors.text};
  ${compose(space, color, typography, layout, position)};
`;

export default Text;

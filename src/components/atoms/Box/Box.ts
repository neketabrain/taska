import styled from "styled-components";
import {
  compose,
  space,
  layout,
  position,
  SpaceProps,
  LayoutProps,
  PositionProps,
} from "styled-system";

type BoxProps = SpaceProps | LayoutProps | PositionProps;

const Box = styled.div<BoxProps>`
  position: relative;
  box-sizing: border-box;
  background-color: inherit;
  ${compose(space, layout, position)};
`;

export default Box;

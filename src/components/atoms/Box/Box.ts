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
  ${compose(space, layout, position)};
`;

export default Box;

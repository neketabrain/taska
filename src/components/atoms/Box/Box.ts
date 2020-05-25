import styled from "styled-components";
import {
  compose,
  space,
  layout,
  position,
  flexbox,
  SpaceProps,
  LayoutProps,
  PositionProps,
  FlexboxProps,
} from "styled-system";

type BoxProps = SpaceProps | LayoutProps | PositionProps | FlexboxProps;

const Box = styled.div<BoxProps>`
  position: relative;
  ${compose(space, layout, position, flexbox)};
`;

export default Box;

import styled from "styled-components";
import {
  compose,
  layout,
  position,
  space,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from "styled-system";

type BoxProps = LayoutProps | PositionProps | SpaceProps;

const Box = styled.div<BoxProps>`
  background-color: inherit;
  box-sizing: border-box;
  position: relative;
  ${compose(layout, position, space)};
`;

export default Box;

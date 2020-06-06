import React from "react";

import { Container, NavLink } from "./NavItem.styles";
import { NavItemProps } from "./NavItem.types";

function NavItem(props: NavItemProps): JSX.Element {
  const { label, Icon, className, ...rest } = props;

  return (
    <Container className={className}>
      <NavLink activeClassName="active" {...rest}>
        {Icon && <Icon />}
        {label}
      </NavLink>
    </Container>
  );
}

export default NavItem;

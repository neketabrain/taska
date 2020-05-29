import React from "react";

import { Container, NavLink } from "./NavItem.styles";
import { NavItemProps } from "./NavItem.types";

function NavItem(props: NavItemProps): JSX.Element {
  const { label, path, Icon, className, exact = false } = props;

  return (
    <Container className={className}>
      <NavLink to={path} exact={exact} activeClassName="active">
        {Icon && <Icon />}
        {label}
      </NavLink>
    </Container>
  );
}

export default NavItem;

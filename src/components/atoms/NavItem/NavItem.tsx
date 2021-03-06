import React, { FC } from "react";

import { Container, NavLink } from "./NavItem.styles";
import { NavItemProps } from "./NavItem.types";

const NavItem: FC<NavItemProps> = (props) => {
  const { className, Icon, label, ...rest } = props;

  return (
    <Container className={className} role="menuitem">
      <NavLink activeClassName="active" {...rest}>
        {Icon && <Icon aria-hidden="true" />}
        {label}
      </NavLink>
    </Container>
  );
};

export default NavItem;

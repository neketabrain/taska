import React from "react";

import { Container, Link } from "./NavItem.styles";
import { NavItemProps } from "./NavItem.types";

function NavItem(props: NavItemProps): JSX.Element {
  const { label, path, Icon, className, exact = false } = props;

  return (
    <Container className={className}>
      <Link to={path} exact={exact} activeClassName="active">
        {Icon && <Icon />}
        {label}
      </Link>
    </Container>
  );
}

export default NavItem;

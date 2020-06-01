import React from "react";

import { Container, NavLink } from "./SettingsMenuItem.styles";
import { SettingsMenuItemProps } from "./SettingsMenuItem.types";

function SettingsMenuItem(props: SettingsMenuItemProps): JSX.Element {
  const { label, path, className, exact = false } = props;

  return (
    <Container className={className}>
      <NavLink to={path} exact={exact} activeClassName="active">
        {label}
      </NavLink>
    </Container>
  );
}

export default SettingsMenuItem;

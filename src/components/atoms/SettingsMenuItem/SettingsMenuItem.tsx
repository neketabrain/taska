import React, { FC } from "react";

import { Container, NavLink } from "./SettingsMenuItem.styles";
import { SettingsMenuItemProps } from "./SettingsMenuItem.types";

const SettingsMenuItem: FC<SettingsMenuItemProps> = (props) => {
  const { className, exact, label, path } = props;

  return (
    <Container className={className} role="presentation">
      <NavLink activeClassName="active" exact={exact} role="menuitem" to={path}>
        {label}
      </NavLink>
    </Container>
  );
};

export default SettingsMenuItem;

import React, { FC } from "react";

import { Container, NavLink } from "./SettingsMenuItem.styles";
import { SettingsMenuItemProps } from "./SettingsMenuItem.types";

const SettingsMenuItem: FC<SettingsMenuItemProps> = (props) => {
  const { className, exact, label, path } = props;

  return (
    <Container className={className}>
      <NavLink activeClassName="active" exact={exact} to={path}>
        {label}
      </NavLink>
    </Container>
  );
};

export default SettingsMenuItem;

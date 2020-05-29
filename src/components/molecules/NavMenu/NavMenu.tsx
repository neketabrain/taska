import React from "react";

import { NavItem, Icons } from "src/components";
import { ROUTES } from "src/constants";

import { Container, NavItemList, Divider } from "./NavMenu.styles";
import { NavMenuProps } from "./NavMenu.types";

const navItems = [
  {
    label: "newTask",
    path: ROUTES.NEW_TASK,
    exact: true,
    Icon: Icons.FilledAdd,
  },
  {
    label: "taskList",
    path: ROUTES.TASKS,
    exact: true,
    Icon: Icons.FilledList,
  },
  {
    label: "settings",
    path: ROUTES.SETTINGS,
    Icon: Icons.FilledSettings,
  },
];

function NavMenu(props: NavMenuProps): JSX.Element {
  const { className } = props;

  return (
    <Container className={className}>
      <NavItemList>
        {navItems.map((navItem) => (
          <NavItem key={navItem.path} {...navItem} />
        ))}

        <Divider />
        <NavItem
          label="logout"
          path={ROUTES.LOGOUT}
          Icon={Icons.FilledExit}
          exact={true}
        />
      </NavItemList>
    </Container>
  );
}

export default NavMenu;

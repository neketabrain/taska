import React from "react";
import { useTranslation } from "react-i18next";

import { Icons } from "src/components";
import { ROUTES } from "src/constants";

import { Container, NavItemList, Divider, MenuItem } from "./NavMenu.styles";
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

  const { t } = useTranslation("common");

  return (
    <Container className={className}>
      <NavItemList>
        {navItems.map(({ label, ...navItem }) => (
          <MenuItem
            key={navItem.path}
            label={t(`navMenu.${label}`)}
            {...navItem}
          />
        ))}

        <Divider />
        <MenuItem
          label={t("navMenu.logout")}
          path={ROUTES.LOGOUT}
          Icon={Icons.FilledExit}
          exact={true}
        />
      </NavItemList>
    </Container>
  );
}

export default NavMenu;

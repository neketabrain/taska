import React from "react";
import { useTranslation } from "react-i18next";

import { Icons } from "src/components";
import { NavItemProps } from "src/components/atoms/NavItem/NavItem.types";
import { ROUTES } from "src/constants";

import { Container, NavItemList, Divider, MenuItem } from "./NavMenu.styles";
import { NavMenuProps } from "./NavMenu.types";

const navItems: NavItemProps[] = [
  {
    label: "newTask",
    to: ROUTES.NEW_TASK,
    exact: true,
    Icon: Icons.FilledAdd,
  },
  {
    label: "taskList",
    to: ROUTES.TASKS,
    Icon: Icons.FilledList,
    isActive: (_, { pathname }): boolean =>
      /tasks/.test(pathname) && !/new/.test(pathname),
  },
  {
    label: "settings",
    to: ROUTES.SETTINGS,
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
            key={navItem.to}
            label={t(`navMenu.${label}`)}
            {...navItem}
          />
        ))}

        <Divider />
        <MenuItem
          label={t("navMenu.logout")}
          to={ROUTES.LOGOUT}
          Icon={Icons.FilledExit}
          exact={true}
        />
      </NavItemList>
    </Container>
  );
}

export default NavMenu;

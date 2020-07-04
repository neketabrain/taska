import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { Icons } from "src/components";
import { NavItemProps } from "src/components/atoms/NavItem/NavItem.types";
import { ROUTES } from "src/constants";
import { ClassName } from "src/types";

import { Container, Divider, MenuItem, NavItemList } from "./NavMenu.styles";

const navItems: NavItemProps[] = [
  {
    exact: true,
    Icon: Icons.FilledAdd,
    label: "newTask",
    to: ROUTES.NEW_TASK,
  },
  {
    Icon: Icons.FilledList,
    isActive: (_, { pathname }): boolean =>
      /tasks/.test(pathname) && !/new/.test(pathname),
    label: "taskList",
    to: ROUTES.TASKS,
  },
  {
    Icon: Icons.FilledSettings,
    label: "settings",
    to: ROUTES.SETTINGS,
  },
];

const NavMenu: FC<ClassName> = (props) => {
  const { className } = props;

  const { t } = useTranslation("common");

  return (
    <Container className={className}>
      <NavItemList role="menu">
        {navItems.map(({ label, ...navItem }) => (
          <MenuItem
            key={navItem.to}
            label={t(`navMenu.${label}`)}
            {...navItem}
          />
        ))}

        <Divider />

        <MenuItem
          exact={true}
          Icon={Icons.FilledExit}
          label={t("navMenu.logout")}
          to={ROUTES.LOGOUT}
        />
      </NavItemList>
    </Container>
  );
};

export default NavMenu;

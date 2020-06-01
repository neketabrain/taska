import React from "react";
import { useTranslation } from "react-i18next";

import { SettingsMenuItem } from "src/components";
import { ROUTES } from "src/constants";

import { Container, SettingsMenuItemList } from "./SettingsMenu.styles";
import { SettingsMenuProps } from "./SettingsMenu.types";

const navItems = [
  {
    label: "email",
    path: ROUTES.SETTINGS_EMAIL,
    exact: true,
  },
  {
    label: "password",
    path: ROUTES.SETTINGS_PASSWORD,
    exact: true,
  },
  {
    label: "profile",
    path: ROUTES.SETTINGS_PROFILE,
    exact: true,
  },
  {
    label: "preferences",
    path: ROUTES.SETTINGS_PREFERENCES,
    exact: true,
  },
];

function SettingsMenu(props: SettingsMenuProps): JSX.Element {
  const { className } = props;

  const { t } = useTranslation("settings");

  return (
    <Container className={className}>
      <SettingsMenuItemList role="menu">
        {navItems.map(({ label, ...navItem }) => (
          <SettingsMenuItem
            key={navItem.path}
            label={t(`navMenu.${label}`)}
            {...navItem}
          />
        ))}
      </SettingsMenuItemList>
    </Container>
  );
}

export default SettingsMenu;

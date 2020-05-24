import React from "react";
import { useTranslation } from "react-i18next";

import { RegistrationForm, Text, Button } from "src/components";

import {
  Container,
  Header,
  Title,
  LoginLink,
  ChevronIcon,
  DividerContainer,
  Divider,
  GoogleIcon,
} from "./RegistrationPage.styles";

function RegistrationPage(): JSX.Element {
  const { t } = useTranslation("registration");

  return (
    <Container>
      <Header>
        <Title>{t("title")}</Title>
        <LoginLink to="/">
          {t("toLogin")} <ChevronIcon />
        </LoginLink>
      </Header>

      <RegistrationForm />

      <DividerContainer>
        <Divider />
        <Text>{t("divider")}</Text>
        <Divider />
      </DividerContainer>

      <Button type="button" variant="secondary">
        <GoogleIcon />
        {t("withGoogle")}
      </Button>
    </Container>
  );
}

export default RegistrationPage;

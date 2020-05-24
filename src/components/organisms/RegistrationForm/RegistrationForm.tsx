import React from "react";
import { useTranslation } from "react-i18next";

import { Input, Box } from "src/components";

import { Form, InputContainer, SubmitButton } from "./RegistrationForm.styles";

function RegistrationForm(): JSX.Element {
  const { t } = useTranslation("registration");

  return (
    <Form>
      <InputContainer>
        <Box display="flex" justifyContent="space-between">
          <Box width="48%">
            <Input label={t("firstName.label")} name="firstName" />
          </Box>

          <Box width="48%">
            <Input label={t("lastName.label")} name="lastName" />
          </Box>
        </Box>
      </InputContainer>

      <InputContainer>
        <Input label={t("email.label")} name="email" />
      </InputContainer>

      <InputContainer>
        <Input label={t("password.label")} name="password" type="password" />
      </InputContainer>

      <SubmitButton variant="primary" type="button">
        {t("button")}
      </SubmitButton>
    </Form>
  );
}

export default RegistrationForm;

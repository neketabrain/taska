import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { Input, Box, Flex } from "src/components";
import { useForm } from "src/hooks";

import { Form, InputContainer, SubmitButton } from "./RegistrationForm.styles";
import {
  RegistrationFormProps,
  RegistrationFormValues,
} from "./RegistrationForm.types";

const defaultValues: RegistrationFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function RegistrationForm(props: RegistrationFormProps): JSX.Element {
  const { onSubmit, getError, clearError } = props;

  const { t } = useTranslation("registration");

  const { values, onChange } = useForm(defaultValues, clearError);
  const [isSubmitting, setSubmitting] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    setSubmitting(true);
    await onSubmit(values);
    setSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Flex justifyContent="space-between">
          <Box width="48%">
            <Input
              required
              label={t("firstName.label")}
              name="firstName"
              type="text"
              value={values.firstName}
              onChange={onChange}
              disabled={isSubmitting}
            />
          </Box>

          <Box width="48%">
            <Input
              required
              label={t("lastName.label")}
              name="lastName"
              type="text"
              value={values.lastName}
              onChange={onChange}
              disabled={isSubmitting}
            />
          </Box>
        </Flex>
      </InputContainer>

      <InputContainer>
        <Input
          required
          error={getError ? getError("email") : ""}
          label={t("email.label")}
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          disabled={isSubmitting}
        />
      </InputContainer>

      <InputContainer>
        <Input
          required
          error={getError ? getError("password") : ""}
          label={t("password.label")}
          name="password"
          type="password"
          value={values.password}
          onChange={onChange}
          disabled={isSubmitting}
        />
      </InputContainer>

      <SubmitButton variant="primary" type="submit" disabled={isSubmitting}>
        {t("button")}
      </SubmitButton>
    </Form>
  );
}

export default RegistrationForm;

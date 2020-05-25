import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { Input, Box, Flex } from "src/components";

import { Form, InputContainer, SubmitButton } from "./RegistrationForm.styles";
import {
  RegistrationFormProps,
  RegistrationFormValues,
} from "./RegistrationForm.types";

function RegistrationForm(props: RegistrationFormProps): JSX.Element {
  const { onSubmit } = props;

  const { t } = useTranslation("registration");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    setSubmitting(true);

    const values: RegistrationFormValues = {
      firstName,
      lastName,
      email,
      password,
    };
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
              value={firstName}
              onChange={(e): void => setFirstName(e.target.value)}
            />
          </Box>

          <Box width="48%">
            <Input
              required
              label={t("lastName.label")}
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e): void => setLastName(e.target.value)}
            />
          </Box>
        </Flex>
      </InputContainer>

      <InputContainer>
        <Input
          required
          label={t("email.label")}
          name="email"
          type="email"
          value={email}
          onChange={(e): void => setEmail(e.target.value)}
        />
      </InputContainer>

      <InputContainer>
        <Input
          required
          label={t("password.label")}
          name="password"
          type="password"
          value={password}
          onChange={(e): void => setPassword(e.target.value)}
        />
      </InputContainer>

      <SubmitButton variant="primary" type="submit" disabled={isSubmitting}>
        {t("button")}
      </SubmitButton>
    </Form>
  );
}

export default RegistrationForm;

import React, { useCallback, useState, FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Flex, Input } from "src/components";
import { useForm } from "src/hooks";
import { OnSubmitEvent } from "src/types";

import { Form, InputContainer, SubmitButton } from "./RegistrationForm.styles";
import { RegistrationFormProps } from "./RegistrationForm.types";

const RegistrationForm: FC<RegistrationFormProps> = (props) => {
  const { className, getError, initialValues, onSubmit, setErrors } = props;

  const { t } = useTranslation("registration");

  const { values, onChange, setValues } = useForm(initialValues, setErrors);
  const [isSubmitting, setSubmitting] = useState(false);

  const resetValues = useCallback(() => setValues({ password: "" }), [
    setValues,
  ]);

  const handleSubmit = useCallback(
    async (event: OnSubmitEvent) => {
      event.preventDefault();

      setSubmitting(true);
      await onSubmit(values, resetValues);
      setSubmitting(false);
    },
    [onSubmit, resetValues, setSubmitting, values]
  );

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <InputContainer>
        <Flex justifyContent="space-between">
          <Box width="48%">
            <Input
              disabled={isSubmitting}
              label={t("firstName.label")}
              name="firstName"
              onChange={onChange}
              required={true}
              type="text"
              value={values.firstName}
            />
          </Box>

          <Box width="48%">
            <Input
              disabled={isSubmitting}
              label={t("lastName.label")}
              name="lastName"
              onChange={onChange}
              required={true}
              type="text"
              value={values.lastName}
            />
          </Box>
        </Flex>
      </InputContainer>

      <InputContainer>
        <Input
          disabled={isSubmitting}
          error={getError ? getError("email") : ""}
          label={t("email.label")}
          name="email"
          onChange={onChange}
          required={true}
          type="email"
          value={values.email}
        />
      </InputContainer>

      <InputContainer>
        <Input
          disabled={isSubmitting}
          error={getError ? getError("password") : ""}
          label={t("password.label")}
          name="password"
          onChange={onChange}
          required={true}
          type="password"
          value={values.password}
        />
      </InputContainer>

      <SubmitButton disabled={isSubmitting} type="submit" variant="secondary">
        {t("button")}
      </SubmitButton>
    </Form>
  );
};

export default RegistrationForm;

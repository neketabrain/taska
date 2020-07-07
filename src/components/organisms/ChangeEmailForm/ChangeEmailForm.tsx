import React, { useCallback, useState, FC } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "src/components";
import { useForm } from "src/hooks";
import { OnSubmitEvent } from "src/types";

import { Form, InputContainer, SubmitButton } from "./ChangeEmailForm.styles";
import { ChangeEmailFormProps } from "./ChangeEmailForm.types";

const ChangeEmailForm: FC<ChangeEmailFormProps> = (props) => {
  const { className, getError, initialValues, onSubmit, setErrors } = props;

  const { t } = useTranslation("settings");

  const { onChange, setValues, values } = useForm(initialValues, setErrors);
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
        <Input
          disabled={isSubmitting}
          error={getError("email")}
          label={t("emailPage.form.email")}
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
          error={getError("password")}
          label={t("emailPage.form.password")}
          name="password"
          onChange={onChange}
          required={true}
          type="password"
          value={values.password}
        />
      </InputContainer>

      <SubmitButton disabled={isSubmitting} type="submit" variant="secondary">
        {t("emailPage.form.submit")}
      </SubmitButton>
    </Form>
  );
};

export default ChangeEmailForm;

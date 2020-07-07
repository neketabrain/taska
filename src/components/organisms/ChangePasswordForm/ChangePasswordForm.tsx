import React, { useCallback, useState, FC } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "src/components";
import { useForm } from "src/hooks";
import { OnSubmitEvent } from "src/types";

import {
  Form,
  InputContainer,
  SubmitButton,
} from "./ChangePasswordForm.styles";
import { ChangePasswordFormProps } from "./ChangePasswordForm.types";

const ChangePasswordForm: FC<ChangePasswordFormProps> = (props) => {
  const { className, getError, initialValues, onSubmit, setErrors } = props;

  const { t } = useTranslation("settings");

  const { onChange, setValues, values } = useForm(initialValues, setErrors);
  const [isSubmitting, setSubmitting] = useState(false);

  const resetValues = useCallback(
    () => setValues({ newPassword: "", oldPassword: "" }),
    [setValues]
  );

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
          error={getError("oldPassword")}
          label={t("passwordPage.form.oldPassword")}
          name="oldPassword"
          onChange={onChange}
          required={true}
          type="password"
          value={values.oldPassword}
        />
      </InputContainer>

      <InputContainer>
        <Input
          disabled={isSubmitting}
          error={getError("newPassword")}
          label={t("passwordPage.form.newPassword")}
          name="newPassword"
          onChange={onChange}
          required={true}
          type="password"
          value={values.newPassword}
        />
      </InputContainer>

      <SubmitButton disabled={isSubmitting} type="submit" variant="primary">
        {t("passwordPage.form.submit")}
      </SubmitButton>
    </Form>
  );
};

export default ChangePasswordForm;

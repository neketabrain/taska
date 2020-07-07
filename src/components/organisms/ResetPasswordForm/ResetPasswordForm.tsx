import React, { useCallback, useState, FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Input } from "src/components";
import { useForm } from "src/hooks";
import { OnSubmitEvent } from "src/types";

import { Form, SubmitButton } from "./ResetPasswordForm.styles";
import { ResetPasswordFormProps } from "./ResetPasswordForm.types";

const ResetPasswordForm: FC<ResetPasswordFormProps> = (props) => {
  const { className, getError, initialValues, onSubmit, setErrors } = props;

  const { t } = useTranslation("reset");

  const { values, onChange, setValues } = useForm(initialValues, setErrors);
  const [isSubmitting, setSubmitting] = useState(false);

  const resetValues = useCallback(() => setValues({ email: "" }), [setValues]);

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
      <Box>
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
      </Box>

      <SubmitButton disabled={isSubmitting} type="submit" variant="primary">
        {t("button")}
      </SubmitButton>
    </Form>
  );
};

export default ResetPasswordForm;

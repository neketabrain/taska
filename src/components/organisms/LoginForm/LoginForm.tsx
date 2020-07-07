import React, { useCallback, useState, FC } from "react";
import { useTranslation } from "react-i18next";

import { CheckBox, Input, Link } from "src/components";
import { ROUTES } from "src/constants";
import { useForm } from "src/hooks";
import { OnSubmitEvent } from "src/types";

import {
  ButtonContainer,
  CheckBoxContainer,
  Form,
  InputContainer,
  SubmitButton,
} from "./LoginForm.styles";
import { LoginFormProps } from "./LoginForm.types";

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, getError, initialValues, onSubmit, setErrors } = props;

  const { t } = useTranslation("login");

  const { onChange, setValues, values } = useForm(initialValues, setErrors);
  const [isSubmitting, setSubmitting] = useState(false);

  const resetValues = useCallback(
    () => setValues({ email: "", password: "" }),
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

      <CheckBoxContainer>
        <CheckBox
          checked={values.isRemembered}
          disabled={isSubmitting}
          label={t("remember")}
          name="isRemembered"
          onChange={onChange}
        />
      </CheckBoxContainer>

      <ButtonContainer>
        <SubmitButton disabled={isSubmitting} type="submit" variant="primary">
          {t("button")}
        </SubmitButton>

        <Link to={ROUTES.RESET}>{t("forgot")}</Link>
      </ButtonContainer>
    </Form>
  );
};

export default LoginForm;

import React, { FormEvent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Box, Flex, Input, TextArea } from "src/components";
import { useForm } from "src/hooks";

import {
  Button,
  ButtonContainer,
  Form,
  InputContainer,
} from "./EditTaskForm.styles";
import { EditTaskFormProps } from "./EditTaskForm.types";

function EditTaskForm(props: EditTaskFormProps): JSX.Element {
  const { initialState, isEditing, onSubmit } = props;

  const { t } = useTranslation("tasks");
  const history = useHistory();

  const { values, onChange } = useForm(initialState);
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setSubmitting(true);

      try {
        await onSubmit(values);
      } catch {
        setSubmitting(false);
      }
    },
    [onSubmit, values]
  );

  const cancel = useCallback(() => history.goBack(), [history]);

  return (
    <Form id="editTask" onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          required
          label={t("newTask.form.name")}
          name="name"
          type="text"
          value={values.name}
          onChange={onChange}
          disabled={isSubmitting}
        />
      </InputContainer>

      <InputContainer>
        <TextArea
          label={t("newTask.form.description")}
          name="description"
          form="editTask"
          rows={4}
          value={values.description}
          onChange={onChange}
          disabled={isSubmitting}
        />
      </InputContainer>

      <InputContainer>
        <Flex justifyContent="space-between">
          <Box width="48%">
            <Input
              required
              label={t("newTask.form.date")}
              name="date"
              type="date"
              value={values.date}
              onChange={onChange}
              disabled={isSubmitting}
            />
          </Box>

          <Box width="48%">
            <Input
              required
              label={t("newTask.form.time")}
              name="time"
              type="time"
              value={values.time}
              onChange={onChange}
              disabled={isSubmitting}
            />
          </Box>
        </Flex>
      </InputContainer>

      <InputContainer>
        <Input
          label={t("newTask.form.address")}
          name="address"
          type="text"
          value={values.address}
          onChange={onChange}
          disabled={isSubmitting}
        />
      </InputContainer>

      <ButtonContainer>
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {!isEditing && t("newTask.form.submit")}
          {!!isEditing && t("editTask.form.submit")}
        </Button>

        {!!isEditing && (
          <Button
            onClick={cancel}
            variant="secondary"
            type="button"
            disabled={isSubmitting}
          >
            {t("editTask.form.cancel")}
          </Button>
        )}
      </ButtonContainer>
    </Form>
  );
}

export default EditTaskForm;

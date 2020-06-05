import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { TextArea, Input, Box, Flex } from "src/components";
import { useForm } from "src/hooks";

import { Form, InputContainer, SubmitButton } from "./EditTaskForm.styles";
import { EditTaskFormProps } from "./EditTaskForm.types";

function EditTaskForm(props: EditTaskFormProps): JSX.Element {
  const { initialState, onSubmit } = props;

  const { t } = useTranslation("tasks");

  const { values, onChange } = useForm(initialState);
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

      <SubmitButton variant="primary" type="submit" disabled={isSubmitting}>
        {t("newTask.form.submit")}
      </SubmitButton>
    </Form>
  );
}

export default EditTaskForm;

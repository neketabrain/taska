import React, { useCallback, useMemo, useState, FC } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Box, DatePicker, Flex, Input, TextArea } from "src/components";
import { useForm } from "src/hooks";
import { OnSubmitEvent } from "src/types";

import {
  Button,
  ButtonContainer,
  Form,
  InputContainer,
} from "./EditTaskForm.styles";
import { EditTaskFormProps } from "./EditTaskForm.types";

const EditTaskForm: FC<EditTaskFormProps> = (props) => {
  const { className, initialValues, isEditing, onSubmit } = props;

  const { t } = useTranslation("tasks");
  const history = useHistory();

  const { onChange, setValues, values } = useForm(initialValues);
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (event: OnSubmitEvent) => {
      event.preventDefault();

      setSubmitting(true);
      await onSubmit(values);
      setSubmitting(false);
    },
    [onSubmit, setSubmitting, values]
  );

  const date = useMemo(() => (!!values.date ? new Date(values.date) : null), [
    values.date,
  ]);
  const time = useMemo(() => (!!values.time ? new Date(values.time) : null), [
    values.time,
  ]);

  const cancel = useCallback(() => history.goBack(), [history]);

  const handleChangeDate = useCallback(
    (newDate: Date | null) => setValues({ date: newDate?.toISOString() }),
    [setValues]
  );
  const handleChangeTime = useCallback(
    (newTime: Date | null) => setValues({ time: newTime?.toISOString() }),
    [setValues]
  );

  return (
    <Form className={className} id="editTask" onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          autoComplete="off"
          disabled={isSubmitting}
          label={t("newTask.form.name")}
          name="name"
          onChange={onChange}
          required={true}
          type="text"
          value={values.name}
        />
      </InputContainer>

      <InputContainer>
        <TextArea
          autoComplete="off"
          disabled={isSubmitting}
          label={t("newTask.form.description")}
          name="description"
          onChange={onChange}
          rows={4}
          value={values.description}
        />
      </InputContainer>

      <InputContainer>
        <Flex justifyContent="space-between">
          <Box width="48%">
            <DatePicker
              autoComplete="off"
              customInput={<Input label={t("newTask.form.date")} name="date" />}
              disabled={isSubmitting}
              name="date"
              onChange={handleChangeDate}
              required={true}
              selected={date}
            />
          </Box>

          <Box width="48%">
            <DatePicker
              autoComplete="off"
              customInput={<Input label={t("newTask.form.time")} name="time" />}
              disabled={isSubmitting}
              name="time"
              onChange={handleChangeTime}
              required={true}
              selected={time}
              time={true}
            />
          </Box>
        </Flex>
      </InputContainer>

      <InputContainer>
        <Input
          disabled={isSubmitting}
          label={t("newTask.form.address")}
          name="address"
          onChange={onChange}
          type="text"
          value={values.address}
        />
      </InputContainer>

      <ButtonContainer>
        <Button disabled={isSubmitting} type="submit" variant="primary">
          {!isEditing && t("newTask.form.submit")}
          {!!isEditing && t("editTask.form.submit")}
        </Button>

        {!!isEditing && (
          <Button
            disabled={isSubmitting}
            onClick={cancel}
            type="button"
            variant="secondary"
          >
            {t("editTask.form.cancel")}
          </Button>
        )}
      </ButtonContainer>
    </Form>
  );
};

export default EditTaskForm;

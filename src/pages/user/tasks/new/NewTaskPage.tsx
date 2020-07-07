import React, { useCallback, FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Api } from "src/api";
import { Card, EditTaskForm } from "src/components";
import { ROUTES } from "src/constants";
import { TasksTypes } from "src/store";
import { Task } from "src/store/tasks";

import { PrimarySection, Title } from "../TasksPages.styles";

const initialValues: Task = {
  address: "",
  completed: false,
  date: "",
  description: "",
  name: "",
  time: "",
};

const NewTaskPage: FC = () => {
  const { t } = useTranslation("tasks");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (values: Task) => {
      const { uid } = Api.auth.currentUser || {};
      if (!uid) return;

      await Api.db
        .collection("users")
        .doc(uid)
        .collection("tasks")
        .add({ ...values })
        .then((res) =>
          res.get().then((res) => {
            const { id } = res;
            const data = res.data();

            dispatch({ type: TasksTypes.ADD, payload: { ...data, id } });
            history.push(`${ROUTES.TASKS}/${id}`);
          })
        );
    },
    [dispatch, history]
  );

  return (
    <PrimarySection>
      <Helmet>
        <title>{t("newTask.pageTitle")}</title>
      </Helmet>

      <Card>
        <Title>{t("newTask.title")}</Title>
        <EditTaskForm initialValues={initialValues} onSubmit={handleSubmit} />
      </Card>
    </PrimarySection>
  );
};

export default NewTaskPage;

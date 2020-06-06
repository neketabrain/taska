import React, { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Api } from "src/api";
import { EditTaskForm, Card } from "src/components";
import { ROUTES } from "src/constants";
import { TasksTypes } from "src/store";
import { Task } from "src/store/tasks";

import { PrimarySection, Title } from "../TasksPages.styles";

function NewTaskPage(): JSX.Element {
  const { t } = useTranslation("tasks");
  const history = useHistory();
  const dispatch = useDispatch();

  const initialState: Task = {
    name: "",
    description: "",
    date: "",
    time: "",
    address: "",
    completed: false,
  };

  const handleSubmit = useCallback(
    async (values: Task) => {
      const { uid } = Api.auth.currentUser || {};
      if (!uid) return;

      return Api.db
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
        <EditTaskForm initialState={initialState} onSubmit={handleSubmit} />
      </Card>
    </PrimarySection>
  );
}

export default NewTaskPage;

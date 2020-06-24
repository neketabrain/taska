import React, { useCallback, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { Card, EditTaskForm } from "src/components";
import { ROUTES } from "src/constants";
import { ApplicationStore, TasksTypes } from "src/store";
import { Task } from "src/store/tasks";

import { Api } from "../../../../api";
import { PrimarySection, Title } from "../TasksPages.styles";

function EditTaskPage(): JSX.Element {
  const { t } = useTranslation("tasks");
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const tasks = useSelector((state: ApplicationStore) => state.tasks);
  const task = useMemo(() => tasks?.find((item) => item.id === id), [
    tasks,
    id,
  ]);

  useEffect(() => {
    if (!!tasks?.length && task?.id !== id) {
      history.push(ROUTES.TASKS);
    }
  }, [tasks, task, id, history]);

  const handleSubmit = useCallback(
    async (values: Task) => {
      const { uid } = Api.auth.currentUser || {};
      if (!uid) return;

      return Api.db
        .collection("users")
        .doc(uid)
        .collection("tasks")
        .doc(id)
        .set(values)
        .then(() => {
          dispatch({ type: TasksTypes.UPDATE, payload: { ...values, id } });
          history.push(`${ROUTES.TASKS}/${id}`);
        });
    },
    [dispatch, history, id]
  );

  if (!task) {
    return <></>;
  }

  return (
    <PrimarySection>
      <Helmet>
        <title>
          {t("editTask.pageTitle")}: {task.name}
        </title>
      </Helmet>

      <Card>
        <Title>{t("editTask.title")}</Title>
        <EditTaskForm
          initialState={task}
          onSubmit={handleSubmit}
          isEditing={true}
        />
      </Card>
    </PrimarySection>
  );
}

export default EditTaskPage;

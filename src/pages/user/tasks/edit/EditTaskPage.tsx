import React, { useCallback, useEffect, useMemo, FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { Api } from "src/api";
import { Card, EditTaskForm } from "src/components";
import { ROUTES } from "src/constants";
import { ApplicationStore, TasksTypes } from "src/store";
import { Task } from "src/store/tasks";

import { PrimarySection, Title } from "../TasksPages.styles";

const EditTaskPage: FC = () => {
  const { t } = useTranslation("tasks");

  const history = useHistory();
  const { id } = useParams();

  const dispatch = useDispatch();
  const tasks = useSelector((state: ApplicationStore) => state.tasks);
  const task = useMemo(() => tasks?.find((item) => item.id === id), [
    id,
    tasks,
  ]);

  useEffect(() => {
    if (!!tasks?.length && task?.id !== id) {
      history.push(ROUTES.TASKS);
    }
  }, [history, id, task, tasks]);

  const handleSubmit = useCallback(
    async (values: Task) => {
      const { uid } = Api.auth.currentUser || {};
      if (!uid) return;

      await Api.db
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
          initialValues={task}
          isEditing={true}
          onSubmit={handleSubmit}
        />
      </Card>
    </PrimarySection>
  );
};

export default EditTaskPage;

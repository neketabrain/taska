import React, { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { Api } from "src/api";
import { EditTaskForm, EditTaskFormValues, Card } from "src/components";
import { UserTypes } from "src/store";

import { PrimarySection, Title } from "../TasksPages.styles";

function NewTaskPage(): JSX.Element {
  const { t } = useTranslation("tasks");
  const dispatch = useDispatch();

  const initialState: EditTaskFormValues = {
    name: "",
    description: "",
    date: "",
    time: "",
    address: "",
  };

  const handleSubmit = useCallback(async (values: EditTaskFormValues) => {
    const { uid } = Api.auth.currentUser || {};
    if (!uid) return;

    return Api.db
      .collection("users")
      .doc(uid)
      .collection("tasks")
      .add({ ...values })
      .then((res) => res.get().then((res) => console.log(res.data())));
  }, []);

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

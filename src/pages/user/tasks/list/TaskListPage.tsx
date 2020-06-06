import React, { useState, useEffect, useCallback } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { Api } from "src/api";
import { TaskList } from "src/components";
import { ApplicationStore, TasksTypes } from "src/store";
import { TasksState } from "src/store/tasks";
import { formatDate } from "src/utils";

import {
  SecondarySection,
  ListContainer,
  ListLoader,
  FilterContainer,
  FilterInput,
} from "../TasksPages.styles";

function TaskListPage(): JSX.Element {
  const { t } = useTranslation("tasks");
  const dispatch = useDispatch();

  const [isFetching, setFetching] = useState(false);
  const [date, setDate] = useState(formatDate(new Date()));
  const [tasks, setTasks] = useState<TasksState>(null);

  const cachedTasks = useSelector((state: ApplicationStore) => state.tasks);

  const handleChangeDate = useCallback(
    (event) => setDate(event.target.value),
    []
  );

  useEffect(() => {
    if (!cachedTasks) {
      const { uid } = Api.auth.currentUser || {};
      if (!uid) return;

      setFetching(true);

      Api.db
        .collection("users")
        .doc(uid)
        .collection("tasks")
        .get()
        .then((res) => {
          const fetchedTasks = res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          dispatch({ type: TasksTypes.GET, payload: fetchedTasks });
        })
        .finally(() => setFetching(false));
    }
  }, [cachedTasks, dispatch]);

  useEffect(() => {
    const filteredTasks =
      cachedTasks && cachedTasks.filter((task) => task.date === date);
    const sortedTasksByTime =
      filteredTasks &&
      filteredTasks.sort((a, b) => a.time.localeCompare(b.time));

    setTasks(sortedTasksByTime);
  }, [cachedTasks, date]);

  return (
    <SecondarySection>
      <Helmet>
        <title>{t("taskList.pageTitle")}</title>
      </Helmet>

      <FilterContainer>
        <FilterInput type="date" value={date} onChange={handleChangeDate} />
      </FilterContainer>

      <ListContainer>
        {isFetching && <ListLoader />}

        {!isFetching && (
          <Scrollbars autoHide={true} style={{ height: "100%" }}>
            <TaskList tasks={tasks} />
          </Scrollbars>
        )}
      </ListContainer>
    </SecondarySection>
  );
}

export default TaskListPage;

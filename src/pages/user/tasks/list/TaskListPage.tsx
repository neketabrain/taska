import React, { useCallback, useEffect, useState, FC } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { TaskList } from "src/components";
import { ApplicationStore } from "src/store";
import { TasksState } from "src/store/tasks";
import { resetTime } from "src/utils";

import {
  DateInput,
  FilterContainer,
  FilterInput,
  ListContainer,
  ListLoader,
  SecondarySection,
} from "../TasksPages.styles";

import { TaskListPageProps } from "./TaskListPage.types";

const TaskListPage: FC<TaskListPageProps> = (props) => {
  const { isFetching } = props;

  const { t } = useTranslation("tasks");
  const cachedTasks = useSelector((state: ApplicationStore) => state.tasks);

  const [filter, setFilter] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<TasksState>(null);

  const handleChangeFilter = useCallback(
    (newDate: Date | null) => setFilter(newDate),
    [setFilter]
  );

  useEffect(() => {
    const filterDate = resetTime(filter);

    const filteredTasks =
      filterDate && cachedTasks
        ? cachedTasks.filter((task) => {
            const taskDate = new Date(task.date);
            taskDate.setHours(0);
            taskDate.setMinutes(0);
            taskDate.setSeconds(0);
            taskDate.setMilliseconds(0);

            return taskDate.getTime() === filterDate.getTime();
          })
        : cachedTasks;

    const sortedTasksByTime =
      filteredTasks &&
      filteredTasks.sort(
        (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
      );

    setTasks(sortedTasksByTime);
  }, [cachedTasks, filter, setTasks]);

  return (
    <SecondarySection>
      <Helmet>
        <title>{t("taskList.pageTitle")}</title>
      </Helmet>

      <FilterContainer>
        <DateInput
          autoComplete="off"
          customInput={<FilterInput />}
          isClearable={true}
          name="date"
          onChange={handleChangeFilter}
          placeholderText={t("taskList.filter")}
          selected={filter}
        />
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
};

export default TaskListPage;

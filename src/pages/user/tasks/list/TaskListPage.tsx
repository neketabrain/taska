import React, { useCallback, useMemo, useState, FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Scrollable, TaskList } from "src/components";
import { ApplicationStore } from "src/store";

import {
  DateInput,
  FilterContainer,
  FilterInput,
  ListContainer,
  ListLoader,
  SecondarySection,
} from "../TasksPages.styles";

import { TaskListPageProps } from "./TaskListPage.types";
import { formatTasks } from "./TaskListPage.utils";

const TaskListPage: FC<TaskListPageProps> = (props) => {
  const { isFetching } = props;

  const { t } = useTranslation("tasks");
  const { t: tA11y } = useTranslation("accessibility");

  const [filter, setFilter] = useState<Date | null>(null);

  const cachedTasks = useSelector((state: ApplicationStore) => state.tasks);
  const tasks = useMemo(() => formatTasks(cachedTasks, filter), [
    cachedTasks,
    filter,
  ]);

  const handleChangeFilter = useCallback(
    (newDate: Date | null) => setFilter(newDate),
    [setFilter]
  );

  return (
    <SecondarySection>
      <Helmet>
        <title>{t("taskList.pageTitle")}</title>
      </Helmet>

      <FilterContainer>
        <DateInput
          autoComplete="off"
          customInput={<FilterInput aria-label={tA11y("filterByDate")} />}
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
          <Scrollable autoHide={true} style={{ height: "100%" }}>
            <TaskList tasks={tasks} />
          </Scrollable>
        )}
      </ListContainer>
    </SecondarySection>
  );
};

export default TaskListPage;

import React from "react";
import { useTranslation } from "react-i18next";

import { TaskItem } from "src/components";
import { ROUTES } from "src/constants";

import { List, EmptyContainer, EmptyText, Button } from "./TaskList.styles";
import { TaskListProps } from "./TaskList.types";

function TaskList(props: TaskListProps): JSX.Element {
  const { tasks, className } = props;

  const { t } = useTranslation("tasks");

  return (
    <List className={className}>
      {tasks && tasks.map((task) => <TaskItem key={task.id} task={task} />)}

      {tasks && tasks.length < 1 && (
        <EmptyContainer>
          <EmptyText>{t("taskList.emptyList")}</EmptyText>
          <Button to={ROUTES.NEW_TASK}>{t("taskList.createTask")}</Button>
        </EmptyContainer>
      )}
    </List>
  );
}

export default TaskList;

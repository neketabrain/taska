import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { TaskListItem } from "src/components";
import { ROUTES } from "src/constants";

import { Button, EmptyContainer, EmptyText, List } from "./TaskList.styles";
import { TaskListProps } from "./TaskList.types";

const TaskList: FC<TaskListProps> = (props) => {
  const { className, tasks } = props;

  const { t } = useTranslation("tasks");

  return (
    <List className={className}>
      {!!tasks &&
        tasks.length > 0 &&
        tasks.map((task) => <TaskListItem key={task.id} task={task} />)}

      {!!tasks && tasks.length < 1 && (
        <EmptyContainer>
          <EmptyText>{t("taskList.emptyList")}</EmptyText>
          <Button to={ROUTES.NEW_TASK}>{t("taskList.createTask")}</Button>
        </EmptyContainer>
      )}
    </List>
  );
};

export default TaskList;

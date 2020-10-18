import React, { Fragment, FC } from "react";
import { useTranslation } from "react-i18next";

import { TaskListItem } from "src/components";
import { ROUTES } from "src/constants";

import {
  Button,
  DateContainer,
  DateText,
  EmptyContainer,
  EmptyText,
  List,
} from "./TaskList.styles";
import { TaskListProps } from "./TaskList.types";

const TaskList: FC<TaskListProps> = (props) => {
  const { className, tasks } = props;

  const { t } = useTranslation("tasks");

  return (
    <List className={className}>
      {tasks.length > 0 &&
        tasks.map(([date, arr]) => (
          <Fragment key={date}>
            <DateContainer>
              <DateText>{date}</DateText>
            </DateContainer>

            {arr.map((task) => (
              <TaskListItem key={task.id} task={task} />
            ))}
          </Fragment>
        ))}

      {tasks.length < 1 && (
        <EmptyContainer>
          <EmptyText>{t("taskList.emptyList")}</EmptyText>
          <Button to={ROUTES.NEW_TASK}>{t("taskList.createTask")}</Button>
        </EmptyContainer>
      )}
    </List>
  );
};

export default TaskList;

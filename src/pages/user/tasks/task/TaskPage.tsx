import React, { useEffect, useMemo, FC } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { Card, TaskInfo } from "src/components";
import { ApplicationStore } from "src/store";

import { ROUTES } from "../../../../constants";
import { PrimarySection } from "../TasksPages.styles";

const TaskPage: FC = () => {
  const history = useHistory();
  const { id } = useParams();

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

  if (!task) {
    return <></>;
  }

  return (
    <PrimarySection>
      <Helmet>
        <title>Taska. {task.name}</title>
      </Helmet>

      <Card>
        <TaskInfo task={task} />
      </Card>
    </PrimarySection>
  );
};

export default TaskPage;

import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { Card, TaskInfo } from "src/components";
import { ApplicationStore } from "src/store";

import { ROUTES } from "../../../../constants";
import { PrimarySection } from "../TasksPages.styles";

function TaskPage(): JSX.Element {
  const { id } = useParams();
  const history = useHistory();

  const tasks = useSelector((state: ApplicationStore) => state.tasks);
  const task = tasks?.find((item) => item.id === id);

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
}

export default TaskPage;

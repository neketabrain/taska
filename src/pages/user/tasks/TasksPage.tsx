import loadable from "@loadable/component";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "../../../constants";

import { Wrapper } from "./TasksPages.styles";

const EditTaskPage = loadable(() =>
  import(/* webpackPrefetch: true */ "./edit")
);
const TaskListPage = loadable(() =>
  import(/* webpackPrefetch: true */ "./list")
);
const TaskPage = loadable(() => import(/* webpackPrefetch: true */ "./task"));
const NewTaskPage = loadable(() => import(/* webpackPrefetch: true */ "./new"));

function TasksPage(): JSX.Element {
  return (
    <Wrapper>
      <Switch>
        <Route exact path={ROUTES.NEW_TASK} component={NewTaskPage} />

        <Route path={ROUTES.TASKS}>
          <TaskListPage />

          <Switch>
            <Route exact path={ROUTES.TASK} component={TaskPage} />
            <Route exact path={ROUTES.EDIT_TASK} component={EditTaskPage} />

            <Redirect to={ROUTES.TASKS} />
          </Switch>
        </Route>

        <Redirect to={ROUTES.TASKS} />
      </Switch>
    </Wrapper>
  );
}

export default TasksPage;

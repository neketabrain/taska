import loadable from "@loadable/component";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "../../../constants";

import { Wrapper } from "./TasksPages.styles";

const TaskListPage = loadable(() =>
  import(/* webpackPrefetch: true */ "./list")
);
const NewTaskPage = loadable(() => import(/* webpackPrefetch: true */ "./new"));

function TasksPage(): JSX.Element {
  return (
    <Wrapper>
      <Switch>
        <Route exact path={ROUTES.NEW_TASK} component={NewTaskPage} />

        <Route path={ROUTES.TASKS}>
          <TaskListPage />

          <Switch>
            <Route exact path={ROUTES.TASK}>
              <p>tasks/:id</p>
            </Route>

            <Route exact path={ROUTES.EDIT_TASK}>
              <p>tasks/:id/edit</p>
            </Route>

            <Redirect to={ROUTES.TASKS} />
          </Switch>
        </Route>

        <Redirect to={ROUTES.TASKS} />
      </Switch>
    </Wrapper>
  );
}

export default TasksPage;

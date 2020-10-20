import loadable from "@loadable/component";
import React, { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import { Api } from "src/api";
import { ROUTES } from "src/constants";
import { ApplicationStore, TasksTypes } from "src/store";

import { DesktopContainer, MobileContainer } from "./TasksPages.styles";

const EditTaskPage = loadable(
  () => import(/* webpackPrefetch: true */ "./edit")
);
const NewTaskPage = loadable(() => import(/* webpackPrefetch: true */ "./new"));
const TaskListPage = loadable(
  () => import(/* webpackPrefetch: true */ "./list")
);
const TaskPage = loadable(() => import(/* webpackPrefetch: true */ "./task"));

const TasksPage: FC = () => {
  const [isFetching, setFetching] = useState(false);

  const dispatch = useDispatch();
  const tasks = useSelector((state: ApplicationStore) => state.tasks);

  useEffect(() => {
    if (!tasks) {
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

          dispatch({ type: TasksTypes.SET, payload: fetchedTasks });
        })
        .finally(() => setFetching(false));
    }
  }, [dispatch, setFetching, tasks]);

  return (
    <Switch>
      <Route component={NewTaskPage} exact={true} path={ROUTES.NEW_TASK} />

      <Route path={ROUTES.TASKS}>
        <DesktopContainer>
          <TaskListPage isFetching={isFetching} />

          <Switch>
            <Route component={TaskPage} exact={true} path={ROUTES.TASK} />
            <Route
              component={EditTaskPage}
              exact={true}
              path={ROUTES.EDIT_TASK}
            />

            <Redirect to={ROUTES.TASKS} />
          </Switch>
        </DesktopContainer>

        <MobileContainer>
          <Switch>
            <Route exact={true} path={ROUTES.TASKS}>
              <TaskListPage isFetching={isFetching} />
            </Route>
            <Route component={TaskPage} exact={true} path={ROUTES.TASK} />
            <Route
              component={EditTaskPage}
              exact={true}
              path={ROUTES.EDIT_TASK}
            />

            <Redirect to={ROUTES.TASKS} />
          </Switch>
        </MobileContainer>
      </Route>

      <Redirect to={ROUTES.TASKS} />
    </Switch>
  );
};

export default TasksPage;

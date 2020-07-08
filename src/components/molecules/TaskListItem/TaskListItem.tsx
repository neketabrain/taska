import React, { useCallback, useMemo, useState, FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { Api } from "src/api";
import { Box, CheckButton } from "src/components";
import { ROUTES } from "src/constants";
import { TasksTypes } from "src/store";
import { getLocale } from "src/utils";

import {
  ClockIcon,
  InfoContainer,
  Name,
  Time,
  Wrapper,
} from "./TaskListItem.styles";
import { TaskListItemProps } from "./TaskListItem.types";

const TaskListItem: FC<TaskListItemProps> = (props) => {
  const { className, task } = props;
  const { completed, id, name, time } = task;

  const [isPending, setPending] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const path = useMemo(() => `${ROUTES.TASKS}/${id}`, [id]);
  const isActive = useMemo(
    () => new RegExp(`^${path}(/edit)?$`, "is").test(pathname),
    [path, pathname]
  );

  const parsedTime = useMemo(
    () =>
      new Date(time).toLocaleTimeString(getLocale(), {
        hour: "2-digit",
        minute: "2-digit",
      }),
    [time]
  );

  const handleClick = useCallback(() => {
    history.push(path);
  }, [history, path]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        handleClick();
      }
    },
    [handleClick]
  );

  const handleCheck = useCallback(
    (checked: boolean) => {
      const { uid } = Api.auth.currentUser || {};
      if (!uid) return;

      setPending(true);

      Api.db
        .collection("users")
        .doc(uid)
        .collection("tasks")
        .doc(id)
        .update("completed", checked)
        .then(() =>
          dispatch({
            type: TasksTypes.UPDATE,
            payload: { ...task, completed: checked },
          })
        )
        .finally(() => setPending(false));
    },
    [dispatch, id, task]
  );

  return (
    <Wrapper
      className={className}
      isActive={isActive}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
    >
      <Box>
        <CheckButton
          checked={completed}
          disabled={isPending}
          onChange={handleCheck}
        />
      </Box>

      <InfoContainer>
        <Name>{name}</Name>
        <Time>
          <ClockIcon />
          {parsedTime}
        </Time>
      </InfoContainer>
    </Wrapper>
  );
};

export default TaskListItem;

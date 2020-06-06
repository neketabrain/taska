import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { Api } from "src/api";
import { Box } from "src/components";
import { ROUTES } from "src/constants";
import { TasksTypes } from "src/store";

import {
  Wrapper,
  InfoContainer,
  Name,
  Time,
  ClockIcon,
  CheckButton,
  CheckIcon,
  FilledCheckIcon,
} from "./TaskItem.styles";
import { TaskItemProps } from "./TaskItem.types";

function TaskItem(props: TaskItemProps): JSX.Element {
  const { task, className } = props;
  const { id, name, time, completed } = task;

  const [isPending, setPending] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const path = `${ROUTES.TASKS}/${id}`;
  const isActive = new RegExp(path).test(pathname);

  const handleClick = useCallback(() => history.push(path), [history, path]);
  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        handleClick();
      }
    },
    [handleClick]
  );

  const handleCheck = useCallback(
    (event) => {
      event.stopPropagation();

      const { uid } = Api.auth.currentUser || {};
      if (!uid) return;

      setPending(true);

      Api.db
        .collection("users")
        .doc(uid)
        .collection("tasks")
        .doc(id)
        .update("completed", !completed)
        .then(() =>
          dispatch({
            type: TasksTypes.UPDATE,
            payload: { ...task, completed: !completed },
          })
        )
        .finally(() => setPending(false));
    },
    [completed, dispatch, id, task]
  );

  return (
    <Wrapper
      tabIndex={0}
      className={className}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      isActive={isActive}
    >
      <Box>
        <CheckButton onClick={handleCheck} disabled={isPending}>
          {completed && <FilledCheckIcon />}
          {!completed && <CheckIcon />}
        </CheckButton>
      </Box>

      <InfoContainer>
        <Name>{name}</Name>
        <Time>
          <ClockIcon />
          {time}
        </Time>
      </InfoContainer>
    </Wrapper>
  );
}

export default TaskItem;

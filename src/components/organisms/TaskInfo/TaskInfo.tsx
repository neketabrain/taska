import React, { useState, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Api } from "src/api";
import { Box, NativeLink, Flex } from "src/components";
import { ROUTES } from "src/constants";
import { TasksTypes } from "src/store";

import {
  Wrapper,
  Header,
  NameContainer,
  Name,
  Time,
  ClockIcon,
  IconButton,
  FilledCheckIcon,
  CheckIcon,
  Container,
  Description,
  PinIcon,
  DateText,
  CalendarIcon,
  VerticalDivider,
  ButtonContainer,
  PenIcon,
  TrashIcon,
  EditButton,
  ButtonWrapper,
} from "./TaskInfo.styles";
import { TaskInfoProps } from "./TaskInfo.types";

function TaskInfo(props: TaskInfoProps): JSX.Element {
  const { task, className } = props;
  const { id, name, time, date, description, completed, address } = task;

  const dispatch = useDispatch();
  const history = useHistory();

  const [isPending, setPending] = useState(false);
  const [isDeleting, setDeleting] = useState(false);

  const parsedDate = useMemo(() => new Date(date).toLocaleDateString(), [date]);
  const addressPath = useMemo(
    () => `https://www.google.com/maps/search/${address}`,
    [address]
  );
  const editPath = useMemo(() => `${ROUTES.TASKS}/${id}/edit`, [id]);

  const handleCheck = useCallback(() => {
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
  }, [completed, dispatch, id, task]);

  const handleDelete = useCallback(() => {
    const { uid } = Api.auth.currentUser || {};
    if (!uid) return;

    setDeleting(true);

    Api.db
      .collection("users")
      .doc(uid)
      .collection("tasks")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: TasksTypes.DELETE, payload: id });
        history.push(ROUTES.TASKS);
      })
      .catch(() => setDeleting(false));
  }, [dispatch, history, id]);

  return (
    <Wrapper className={className}>
      <Header withBorder={!!description || !!address}>
        <Box>
          <IconButton onClick={handleCheck} disabled={isPending}>
            {completed && <FilledCheckIcon />}
            {!completed && <CheckIcon />}
          </IconButton>
        </Box>

        <NameContainer>
          <Name>{name}</Name>

          <Flex>
            <DateText>
              <CalendarIcon />
              {parsedDate}
            </DateText>

            <Time>
              <ClockIcon />
              {time}
            </Time>
          </Flex>
        </NameContainer>

        <ButtonWrapper>
          <ButtonContainer>
            <EditButton to={editPath}>
              <PenIcon />
            </EditButton>

            <VerticalDivider />

            <IconButton onClick={handleDelete} disabled={isDeleting}>
              <TrashIcon />
            </IconButton>
          </ButtonContainer>
        </ButtonWrapper>
      </Header>

      {!!description && (
        <Container>
          <Description>{description}</Description>
        </Container>
      )}

      {!!address && (
        <Container>
          <NativeLink href={addressPath} target="_blank" rel="noreferrer">
            <PinIcon /> {address}
          </NativeLink>
        </Container>
      )}
    </Wrapper>
  );
}

export default TaskInfo;

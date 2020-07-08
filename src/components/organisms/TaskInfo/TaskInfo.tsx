import React, { useCallback, useMemo, useState, FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Api } from "src/api";
import { Box, Flex, NativeLink } from "src/components";
import { ROUTES } from "src/constants";
import { TasksTypes } from "src/store";
import { getLocale } from "src/utils";

import {
  ButtonContainer,
  ButtonWrapper,
  CalendarIcon,
  CheckButton,
  CheckIcon,
  ClockIcon,
  Container,
  DateText,
  DeleteButton,
  Description,
  EditButton,
  FilledCheckIcon,
  Header,
  Name,
  NameContainer,
  PenIcon,
  PinIcon,
  Time,
  TrashIcon,
  VerticalDivider,
  Wrapper,
} from "./TaskInfo.styles";
import { TaskInfoProps } from "./TaskInfo.types";

const TaskInfo: FC<TaskInfoProps> = (props) => {
  const { className, task } = props;
  const { address, completed, date, description, id, name, time } = task;

  const { t } = useTranslation("accessibility");

  const dispatch = useDispatch();
  const history = useHistory();

  const [isPending, setPending] = useState(false);

  const addressPath = useMemo(
    () => `https://www.google.com/maps/search/${address}`,
    [address]
  );
  const editPath = useMemo(() => `${ROUTES.TASKS}/${id}/edit`, [id]);
  const parsedDate = useMemo(
    () => new Date(date).toLocaleDateString(getLocale()),
    [date]
  );
  const parsedTime = useMemo(
    () =>
      new Date(time).toLocaleTimeString(getLocale(), {
        hour: "2-digit",
        minute: "2-digit",
      }),
    [time]
  );

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

    setPending(true);

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
      .catch(() => setPending(false));
  }, [dispatch, history, id]);

  return (
    <Wrapper className={className}>
      <Header withBorder={!!description || !!address}>
        <Box>
          <CheckButton disabled={isPending} onClick={handleCheck}>
            {completed && <FilledCheckIcon />}
            {!completed && <CheckIcon />}
          </CheckButton>
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
              {parsedTime}
            </Time>
          </Flex>
        </NameContainer>

        <ButtonWrapper>
          <ButtonContainer>
            <EditButton aria-label={t("editTask")} to={editPath}>
              <PenIcon />
            </EditButton>

            <VerticalDivider />

            <DeleteButton disabled={isPending} onClick={handleDelete}>
              <TrashIcon />
            </DeleteButton>
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
          <NativeLink
            href={addressPath}
            rel="noreferrer noopener"
            target="_blank"
          >
            <PinIcon /> {address}
          </NativeLink>
        </Container>
      )}
    </Wrapper>
  );
};

export default TaskInfo;

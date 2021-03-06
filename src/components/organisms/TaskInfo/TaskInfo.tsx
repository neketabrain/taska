import React, { useCallback, useMemo, useState, FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Api } from "src/api";
import { Box, Flex, LinkDetector, NativeLink, Tooltip } from "src/components";
import { ROUTES } from "src/constants";
import { TasksTypes } from "src/store";
import { getLocale, getLocaleDate, getLocaleTime } from "src/utils";

import {
  ButtonContainer,
  ButtonWrapper,
  CalendarIcon,
  CheckTaskButton,
  ClockIcon,
  Container,
  DateText,
  DeleteButton,
  Description,
  EditButton,
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
  const parsedDate = useMemo(() => getLocaleDate(date, getLocale()), [date]);
  const parsedTime = useMemo(
    () =>
      getLocaleTime(time, getLocale(), {
        hour: "2-digit",
        minute: "2-digit",
      }),
    [time]
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
          <CheckTaskButton
            checked={completed}
            disabled={isPending}
            onChange={handleCheck}
          />
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
            <Tooltip overlay={t("editTask")}>
              <EditButton aria-label={t("editTask")} to={editPath}>
                <PenIcon />
              </EditButton>
            </Tooltip>

            <VerticalDivider />

            <Tooltip overlay={t("deleteTask")}>
              <DeleteButton
                aria-label={t("deleteTask")}
                disabled={isPending}
                onClick={handleDelete}
              >
                <TrashIcon />
              </DeleteButton>
            </Tooltip>
          </ButtonContainer>
        </ButtonWrapper>
      </Header>

      {!!description && (
        <Container>
          <Description>
            <LinkDetector>{description}</LinkDetector>
          </Description>
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

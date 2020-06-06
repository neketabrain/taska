import { TasksActions, TasksTypes, TasksState } from "./types";

function TasksReducer(
  state: TasksState = null,
  action: TasksActions
): TasksState {
  switch (action.type) {
    case TasksTypes.ADD: {
      return [...(state || []), action.payload];
    }

    case TasksTypes.UPDATE: {
      return (
        state &&
        state.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }

          return task;
        })
      );
    }

    case TasksTypes.GET: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}

export default TasksReducer;

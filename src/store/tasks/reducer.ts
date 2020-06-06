import { TasksTypes, TasksState, TasksActions } from "./types";

function TasksReducer(
  state: TasksState = null,
  action: TasksActions
): TasksState {
  switch (action.type) {
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

    case TasksTypes.ADD: {
      return [...(state || []), action.payload];
    }

    case TasksTypes.GET: {
      return action.payload;
    }

    case TasksTypes.CLEAN: {
      return null;
    }

    default: {
      return state;
    }
  }
}

export default TasksReducer;

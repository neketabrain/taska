import { Task, TasksActions, TasksTypes } from "./types";

function TasksReducer(state: Task[] = [], action: TasksActions): Task[] {
  switch (action.type) {
    case TasksTypes.ADD: {
      return [...state, action.payload];
    }

    case TasksTypes.UPDATE: {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }

        return task;
      });
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

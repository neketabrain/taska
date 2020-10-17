import { Tasks } from "src/components/organisms/TaskList/TaskList.types";
import { Task, TasksState } from "src/store/tasks";
import { getLocale, getLocaleDate, resetTime } from "src/utils";

const sortByTime = (tasks: Task[]): Task[] =>
  tasks.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

const sortByDate = (tasks: Task[]): Task[] =>
  tasks.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

const filterByDate = (tasks: Task[], date: Date): Task[] => {
  const filterDate = resetTime(date);

  return tasks.filter((task) => {
    const taskDate = resetTime(new Date(task.date));

    return taskDate.getTime() === filterDate.getTime();
  });
};

const groupByDate = (tasks: Task[]): Tasks => {
  const map = new Map<string, Task[]>();

  tasks.forEach((task) => {
    const key = getLocaleDate(task.date, getLocale());
    const mappedTasks = map.get(key) || [];
    map.set(key, [...mappedTasks, task]);
  });

  return Array.from(map);
};

const sortTasksByTime = (tasks: Tasks): Tasks =>
  tasks.map(([date, task]) => {
    return [date, sortByTime(task)];
  });

export const formatTasks = (tasks: TasksState, filter: Date | null): Tasks => {
  if (!tasks) {
    return [];
  }

  const filteredTasks = filter ? filterByDate(tasks, filter) : tasks;
  const sortedTasks = sortByDate(filteredTasks);
  const groupedTasks = groupByDate(sortedTasks);

  return sortTasksByTime(groupedTasks);
};

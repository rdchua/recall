import { Task } from "components/TaskItem";
import { createContext, useContext, useMemo, useState } from "react";

interface IProps {
  selectedTask: Task | null;
  setSelectedTask: (value: any) => void | null;
}

const initialValues = {
  selectedTask: {
    title: "",
  },
  setSelectedTask: (value: any) => {},
};

export const TaskContext = createContext<IProps>(initialValues);

export const useTask = () => {
  return useContext(TaskContext);
};

export function TaskProvider({ children, ...props }: any) {
  const [selectedTask, setSelectedTask] = useState(null);

  const providerValue = useMemo(
    () => ({
      selectedTask,
      setSelectedTask,
    }),
    [selectedTask, setSelectedTask]
  );

  return (
    <TaskContext.Provider value={providerValue}>
      {children}
    </TaskContext.Provider>
  );
}

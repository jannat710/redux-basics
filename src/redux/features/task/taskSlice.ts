import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}
const initialState: InitialState = {
  tasks: [
    {
      id: "IIhI-rWvH2ONv7CQMhdnQ",
      isCompleted: false,
      title: "Set up project repository",
      description:
        "Initialize the Git repository, add .gitignore, and configure branches for development and production.",
      priority: "high",
      dueDate: "2025-11-10",
      assignedTo: null,
    },
    {
      id: "IIhI-rWvH2ONv7CQMhdnR",
      isCompleted: false,
      title: "Create reusable UI components",
      description:
        "Develop reusable components like buttons, modals, and input fields with Tailwind CSS for the project.",
      priority: "medium",
      dueDate: "2025-11-15",
      assignedTo: null,
    },
    {
      id: "IIhI-rWvH2ONv7CQMhdnS",
      isCompleted: false,
      title: "Implement user authentication",
      description:
        "Set up user login, registration, and JWT-based authentication for secure access to the app.",
      priority: "low",
      dueDate: "2025-11-20",
      assignedTo: null,
    },
  ],

  filter: "all",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;
const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
});
export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todo.tasks;
  }
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;
export default taskSlice.reducer;

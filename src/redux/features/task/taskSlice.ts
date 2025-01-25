import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}
const initialState: InitialState = {
  tasks: [
    {
      id: "1",
      title: "Set up project repository",
      description:
        "Initialize the Git repository, add .gitignore, and configure branches for development and production.",
      dueDate: "2025-11-10",
      isComplete: false,
      priority: "High",
    },
    {
      id: "2",
      title: "Create reusable UI components",
      description:
        "Develop reusable components like buttons, modals, and input fields with Tailwind CSS for the project.",
      dueDate: "2025-11-15",
      isComplete: false,
      priority: "Medium",
    },
    {
      id: "3",
      title: "Implement user authentication",
      description:
        "Set up user login, registration, and JWT-based authentication for secure access to the app.",
      dueDate: "2025-11-20",
      isComplete: false,
      priority: "Low",
    },
  ],

  filter: "all",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export default taskSlice.reducer;

import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: ITask[];
}
const initialState: InitialState = {
  task: [
    {
      id: "ahhbs",
      title: "Initial fronted",
      description: "hgyudguywuwqhgdu",
      dueDate: "2025-11",
      isComplete: false,
      priority: "High",
    },
    {
      id: "ahhbs",
      title: "Initial fronted",
      description: "hgyudguywuwqhgdu",
      dueDate: "2025-11",
      isComplete: false,
      priority: "High",
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
export default taskSlice.reducer;

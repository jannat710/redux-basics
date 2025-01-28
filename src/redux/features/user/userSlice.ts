import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}
const initialState: InitialState = {
  users: [
    {
      id: "IIhI-rWvH2ONv7CQMhdnU",
      name: "Jannatul",
    },
    {
      id: "IIhI-rWvH2ONv7CQMhdnV",
      name: "Ferdous",
    },
    {
      id: "IIhI-rWvH2ONv7CQMhdnW",
      name: "Toymur",
    },
  ],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, actions: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== actions.payload);
    },
  },
});
export const selectUsers = (state: RootState) => state.user.users;
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

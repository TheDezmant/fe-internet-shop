import { ICategories } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICategories = {
  id: 0,
  name: "",
  parentId: 0,
  all: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, actions: PayloadAction<ICategories>) {
      state.id = actions.payload.id;
      state.name = actions.payload.name;
      state.parentId = actions.payload.parentId;
    },
    showAll(state, actions: PayloadAction<boolean>) {
      state.all = actions.payload;
    },
  },
});

export default categoriesSlice.reducer;

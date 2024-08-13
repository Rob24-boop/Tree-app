import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRow } from "../../../types/types";

let initialState: IRow = { children: [], id: 0, name: "" };

const selectedSlice = createSlice({
  name: "selected",
  initialState: initialState,
  reducers: {
    setSelected: (state, { payload }: PayloadAction<IRow>) => {
      state.children = payload.children;
      state.id = payload.id;
      state.name = payload.name;
    },
  },
});

export const selectedReducer = selectedSlice.reducer;
export const { setSelected } = selectedSlice.actions;

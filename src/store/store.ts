import { configureStore } from "@reduxjs/toolkit";
import { selectedReducer } from "./Slices/selectedSlice/selectedSlice";
import { treeReducer } from "./Slices/treeSlice/treeSlice";

export const store = configureStore({
  reducer: {
    selected: selectedReducer,
    tree: treeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { IInitialTree, IRow } from "../../../types/types";
import { axiosTree } from "./api/axiosForTree";
import { axiosForCreating } from "./api/axiosForCreateing";
import { axiosForEditing } from "./api/axiosForEditing";
import { axiosForDeleting } from "./api/axiosForDeleting";

const initialState: IInitialTree = {
  data: null,
  isError: false,
  isLoading: false,
};

const treeSlice = createSlice({
  name: "tree",
  initialState: initialState,
  reducers: {},
  extraReducers: (
    builder: ActionReducerMapBuilder<{
      data: IRow | null;
      isError: boolean;
      isLoading: boolean;
    }>
  ) => {
    builder
      .addCase(axiosTree.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(axiosTree.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(axiosTree.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(axiosForCreating.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(axiosForCreating.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(axiosForCreating.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(axiosForEditing.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(axiosForEditing.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(axiosForEditing.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(axiosForDeleting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(axiosForDeleting.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(axiosForDeleting.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const treeReducer = treeSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, TREE_NAME } from "../../../../config";
import axios from "axios";

export const axiosTree = createAsyncThunk("tree/axiosTree", async () => {
  const response = await axios(`${API_URL}.get`, {
    params: {
      treeName: TREE_NAME,
    },
  });
  return response.data;
});

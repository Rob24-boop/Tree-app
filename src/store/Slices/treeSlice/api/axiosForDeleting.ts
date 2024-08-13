import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, TREE_NAME } from "../../../../config";
import axios from "axios";
import { IDeleteArgs } from "../../../../types/types";

export const axiosForDeleting = createAsyncThunk(
  "tree/axiosForDeleting",
  async ({ treeName, nodeId }: IDeleteArgs) => {
    await axios(`${API_URL}.node.delete`, {
      params: {
        treeName,
        nodeId,
      },
    });
    const response = await axios(`${API_URL}.get`, {
      params: {
        treeName: TREE_NAME,
      },
    });
    return response.data;
  }
);

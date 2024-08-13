import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, TREE_NAME } from "../../../../config";
import axios from "axios";
import { ICreateArgs } from "../../../../types/types";

export const axiosForCreating = createAsyncThunk(
  "tree/axiosForCreating",
  async ({ treeName, parentNodeId, nodeName }: ICreateArgs) => {
    await axios(`${API_URL}.node.create`, {
      params: {
        treeName,
        parentNodeId,
        nodeName,
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

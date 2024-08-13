import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, TREE_NAME } from "../../../../config";
import axios from "axios";
import { IEditArgs } from "../../../../types/types";

export const axiosForEditing = createAsyncThunk(
  "tree/axiosForEditing",
  async ({ treeName, nodeId, newNodeName }: IEditArgs) => {
    await axios(`${API_URL}.node.rename`, {
      params: {
        treeName,
        nodeId,
        newNodeName,
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

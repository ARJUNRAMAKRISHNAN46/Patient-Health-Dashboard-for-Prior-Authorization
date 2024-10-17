import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthAxios } from "../constants/AuthAxios";

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await AuthAxios.post("/patients", {
        ...userData,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

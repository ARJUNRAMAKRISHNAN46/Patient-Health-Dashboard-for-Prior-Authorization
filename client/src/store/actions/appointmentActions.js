import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppointmentAxios } from "../../constants/axiosInstances";

export const createAppointment = createAsyncThunk(
  "appointment/create",
  async (appointmentData, { rejectWithValue }) => {
    try {
      const { data } = await AppointmentAxios.post("/add-appointment", appointmentData, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);






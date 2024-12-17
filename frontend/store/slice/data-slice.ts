import { EnData } from "@/data";
import { createSlice } from "@reduxjs/toolkit";

const initialState = EnData;

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export default dataSlice.reducer;

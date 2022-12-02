import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface RecipesResponse {
  Recipe: [];
}

export interface Recipe {
  title: string;
  image: string;
}

const initialState: Recipe = {
  title: "",
  image: "",
};

export const apiSlice = createSlice({
  name: "loadApi",
  initialState,
  reducers: {},
});

import { configureStore } from "@reduxjs/toolkit";
import { languageReducer } from "./slices";

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

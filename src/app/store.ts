import { configureStore } from "@reduxjs/toolkit";
import { golangApi } from "../services/golangAPI";

export default configureStore({
  reducer: {
    [golangApi.reducerPath]: golangApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(golangApi.middleware)
})
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import appReducer from "./reducers/AppSlice";

const rootReducer = combineReducers({
  userReducer,
  appReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { brandAPI } from "../services/BrandService";
import { categoriesAPI } from "../services/CategoriesService";
import { deviceAPI } from "../services/DeviceService";
import userReducer from "./reducers/userSlice";
import categoriesReducer from "./reducers/categoriesSlice";

const rootReducer = combineReducers({
  userReducer,
  categoriesReducer,
  [brandAPI.reducerPath]: brandAPI.reducer,
  [categoriesAPI.reducerPath]: categoriesAPI.reducer,
  [deviceAPI.reducerPath]: deviceAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        brandAPI.middleware,
        deviceAPI.middleware,
        categoriesAPI.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

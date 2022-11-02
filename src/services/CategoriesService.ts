import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICategories } from "../types";

export const categoriesAPI = createApi({
  reducerPath: "categoriesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  endpoints: (build) => ({
    fetchAllCategoriesById: build.query<ICategories[], string>({
      query: (parentId: string = "0") => ({
        url: "/categories",
        params: {
          parentId: parentId,
        },
      }),
    }),
  }),
});

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IBrand } from "../types";

export const brandAPI = createApi({
  reducerPath: "brandAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  endpoints: (build) => ({
    fetchAllBrands: build.query<IBrand[], string>({
      query: () => ({
        url: "/brand",
      }),
    }),
  }),
});

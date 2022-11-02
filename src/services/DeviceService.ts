import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IDevice } from "../types";

export const deviceAPI = createApi({
  reducerPath: "deviceAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  endpoints: (build) => ({
    fetchAllDevices: build.query<IDevice[], string>({
      query: (categoriesId?: string) => ({
        url: "/device",
        params: {
          categoriesId: categoriesId,
        },
      }),
    }),
    fetchOneDevice: build.query<IDevice, string>({
      query: (id: string) => ({
        url: `/device/${id}`,
      }),
    }),
  }),
});

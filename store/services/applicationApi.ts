import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const baseQuery = fetchBaseQuery({
  credentials: 'same-origin',
  mode: 'cors',
});

const applicationApi = createApi({
  reducerPath: 'application',
  baseQuery,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getAbility: builder.query({
      query: (params) => `/api/ability/?limit=${params.limit}&offset=${params.offset}`,
    }),
  }),
});

export const { useGetAbilityQuery } = applicationApi;
export default applicationApi;

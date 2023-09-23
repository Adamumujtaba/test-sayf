import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../services/controller';

export const studentApi = createApi({
  reducerPath: 'student',
  tagTypes: ['student'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    students: builder.query({
      query: () => '/grad',
      providesTags: ['student'],
    }),
    addStudent: builder.mutation({
      query: (data) => ({
        url: 'grad',
        method: 'post',
        body: data,
      }),
      invalidatesTags: ['student'],
    }),
  }),
});

export const { useStudentsQuery, useAddStudentMutation } = studentApi;

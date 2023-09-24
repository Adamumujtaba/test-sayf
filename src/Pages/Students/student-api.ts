import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../services/controller';
import { notification } from 'antd';

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
      async onQueryStarted(_, { queryFulfilled: qf }) {
        qf.then(() => {
          notification.success({
            message: 'Record Added Successfully',
            style: { marginTop: '45px' },
          });
        }).catch((error) => {
          notification.error({
            message: error.error.message,
            style: { marginTop: '45px' },
          });
        });
      },
    }),
  }),
});

export const { useStudentsQuery, useAddStudentMutation } = studentApi;

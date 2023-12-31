import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../services/controller';
import { notification } from 'antd';

export interface Records {
  fullname: string;
  geo: string;
  phone: string;
  address: string;
  file: string;
  yr: string;
}

const CovertToFormData = (payload: Records) => {
  console.log('DDDDD', payload);
  const formData = new FormData();
  if (payload) {
    formData.append('file', payload?.file);
    formData.append('fullname', payload?.fullname);
    formData.append('geo', payload?.geo);
    formData.append('phone', payload?.phone);
    formData.append('address', payload?.address);
    formData.append('yr', payload?.yr);
  }
  return formData;
};

export const visitApi = createApi({
  reducerPath: 'visit',
  tagTypes: ['visit'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    visitRecord: builder.query({
      query: () => 'records',
      providesTags: ['visit'],
    }),
    addRecord: builder.mutation({
      query: (data) => ({
        url: 'records',
        method: 'post',
        body: CovertToFormData(data),
      }),
      invalidatesTags: ['visit'],
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
    deleteRecord: builder.mutation({
      query: (id) => ({
        url: `records/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['visit'],
      async onQueryStarted(_, { queryFulfilled: qf }) {
        qf.then(() => {
          notification.success({
            message: 'Record Delete Successfully',
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
    updateRecord: builder.mutation({
      query: (data) => ({
        url: `records/${data._id}`,
        method: 'PATCH',
        body: CovertToFormData(data),
      }),
      invalidatesTags: ['visit'],
      async onQueryStarted(_, { queryFulfilled: qf }) {
        qf.then(() => {
          notification.success({
            message: 'Record Updated Successfully',
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

export const {
  useVisitRecordQuery,
  useAddRecordMutation,
  useDeleteRecordMutation,
  useUpdateRecordMutation,
} = visitApi;

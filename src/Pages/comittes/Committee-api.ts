import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../services/controller';
import { notification } from 'antd';

export interface Props {
  fullname: string;
  phone: string;
  gender: string;
  committee: string;
  file: string;
}

const CovertToFormData = (payload: Props) => {
  const formData = new FormData();
  if (payload) {
    formData.append('file', payload?.file);
    formData.append('fullname', payload?.fullname);
    formData.append('gender', payload?.gender);
    formData.append('phone', payload?.phone);
    formData.append('committee', payload?.committee);
  }
  return formData;
};

export const CommitteeApi = createApi({
  reducerPath: 'committees',
  tagTypes: ['committees'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    committee: builder.query({
      query: () => '/committees',
      providesTags: ['committees'],
    }),
    addCommittee: builder.mutation({
      query: (data) => ({
        url: '/committees',
        method: 'post',
        body: CovertToFormData(data),
      }),
      invalidatesTags: ['committees'],
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
    updateCommittee: builder.mutation({
      query: (data) => ({
        url: `/committees/${data._id}`,
        method: 'PATCH',
        body: CovertToFormData(data),
      }),
      invalidatesTags: ['committees'],
    }),
    deleteCommittee: builder.mutation({
      query: (id) => ({
        url: `/committees/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['committees'],
    }),
  }),
});

export const {
  useAddCommitteeMutation,
  useCommitteeQuery,
  useDeleteCommitteeMutation,
  useUpdateCommitteeMutation,
} = CommitteeApi;

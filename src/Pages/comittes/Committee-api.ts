import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../services/controller';

export interface Props {
  fullname: string;
  phone: string;
  gender: string;
  committee: string;
  file: string;
}

const CovertToFormData = (payload: Props) => {
  const formData = new FormData();
  if (payload?.file) {
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
} = CommitteeApi;

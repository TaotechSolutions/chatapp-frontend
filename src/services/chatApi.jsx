import { apiSlice } from './apiSlice';

// Just an example of RTK Query and how it is used
export const chatApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getConversations: builder.query({
      query: () => ({ url: '/conversations', method: 'GET' }),
    }),
    sendMessage: builder.mutation({
      query: data => ({ url: '/messages', method: 'POST', data }),
    }),
  }),
});

export const { useGetConversationsQuery, useSendMessageMutation } = chatApi;

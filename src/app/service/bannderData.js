import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bannerApi = createApi({
  reducerPath: "banner",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    //  Get all banner (reading)

    getAllBanner: builder.query({
      query: () => "/banner",
    }),

    // Get banner by id

    getABannerById: builder.query({
      query: (id) => `/banner/${id}`,
    }),

    // Add new banner

    addNewBanner: builder.mutation({
      query: (newBanner) => ({
        url: `/banner`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newBanner,
      }),
    }),

    // Update a banner

    updateBanner: builder.mutation({
        query: ({id, updateBanner}) => ({
            url: `/banner/${id}`,
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: updateBanner
        })
    }),

    // Delete a banner

    deleteBanner: builder.mutation({
        query: (id) => ({
            url: `banner/${id}`,
            method: 'DELETE'
        })
    })


  }),
});

export const {
    useGetAllBannerQuery, 
    useGetABannerByIdQuery,
    useAddNewBannerMutation, 
    useUpdateBannerMutation,
    useDeleteBannerMutation,
  } = bannerApi; 
  
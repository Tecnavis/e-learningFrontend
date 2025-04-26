import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const syllabusApi = createApi({
  reducerPath: "syllabus",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({

    //  Get all syllabus (reading)

    getAllSyllbus: builder.query({
      query: () => "/syllabus",
    }),

    // Get syllabus by id

    getASyllbusById: builder.query({
      query: (id) => `/syllabus/${id}`,
    }),

    // Add new syllabus

    addNewSyllbus: builder.mutation({
      query: (newSyllbus) => ({
        url: `/syllabus`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newSyllbus,
      }),
    }),

    // Update a syllabus

    updateSyllbus: builder.mutation({
        query: ({id, updateSyllbus}) => ({
            url: `/syllabus/${id}`,
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: updateSyllbus
        })
    }),

       // add a syllabus to new class

       addSyllbusClass: builder.mutation({
        query: ({id, addSyllbusClass}) => ({
            url: `/syllabus/add-class/${id}`,
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: addSyllbusClass
        })
    }),

    // Delete a syllabus

    deleteSyllbus: builder.mutation({
        query: (id) => ({
            url: `/syllabus/${id}`,
            method: 'DELETE'
        })
    })


  }),
});

export const {
    useGetAllSyllbusQuery, 
    useGetASyllbusByIdQuery,
    useAddNewSyllbusMutation, 
    useUpdateSyllbusMutation,
    useDeleteSyllbusMutation,
    useAddSyllbusClassMutation
  } = syllabusApi; 
  
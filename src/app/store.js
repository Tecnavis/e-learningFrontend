import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { bannerApi } from "./service/bannderData";
import { specialDaysApi } from "./service/specialDayData";
import { syllabusApi } from "./service/syllbusData";
import { discussionApi } from "./service/discussionData";


export const store = configureStore({
  reducer: {
    [bannerApi.reducerPath]: bannerApi.reducer,
    [specialDaysApi.reducerPath]: specialDaysApi.reducer,
    [syllabusApi.reducerPath]: syllabusApi.reducer,
    [discussionApi.reducerPath]: discussionApi.reducer,

  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
  .concat(bannerApi.middleware)
  .concat(specialDaysApi.middleware)
  .concat(syllabusApi.middleware)
  .concat(discussionApi.middleware),

});

setupListeners(store.dispatch);
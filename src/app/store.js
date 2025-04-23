import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { bannerApi } from "./service/bannderData";
import { specialDaysApi } from "./service/specialDayData";


export const store = configureStore({
  reducer: {
    [bannerApi.reducerPath]: bannerApi.reducer,
    [specialDaysApi.reducerPath]: specialDaysApi.reducer,

  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
  .concat(bannerApi.middleware)
  .concat(specialDaysApi.middleware),

});

setupListeners(store.dispatch);
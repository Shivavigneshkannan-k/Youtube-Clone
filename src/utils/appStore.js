import { configureStore } from "@reduxjs/toolkit";
import featureReducer from "./featureSlice";
import cacheReducer from "./cacheSlice";
import chatReducer from "./ChatSlice";
const appStore = configureStore({
  reducer: {
    feature: featureReducer,
    cache: cacheReducer,
    chat: chatReducer
  }
});

export default appStore;

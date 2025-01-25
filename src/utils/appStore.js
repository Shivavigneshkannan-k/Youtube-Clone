import { configureStore } from "@reduxjs/toolkit";
import featureReducer from "./featureSlice"
import cacheReducer from "./cacheSlice"
const appStore = configureStore({
    reducer:{
        feature: featureReducer,
        cache: cacheReducer,
    }
})

export default appStore;
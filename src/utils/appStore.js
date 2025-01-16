import { configureStore } from "@reduxjs/toolkit";
import featureReducer from "./featureSlice"
const appStore = configureStore({
    reducer:{
        feature: featureReducer,
    }
})

export default appStore;
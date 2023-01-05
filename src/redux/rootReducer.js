import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import weatherReducer from "./weatherSlice";

const persistConfig = {
   key: "root",
   storage,
   whitelist: [],
};
const reducers = combineReducers({
   weatherReducer
});
const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer;
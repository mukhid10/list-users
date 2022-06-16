import { combineReducers } from "redux";
import { userDetailReducer } from "./reducers/detailUser";
import { dataAllUserReducer } from "./reducers/dataUserReducer";

const rootReducers = combineReducers({ userDetailReducer, dataAllUserReducer });

export default rootReducers;

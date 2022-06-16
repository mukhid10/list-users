import { combineReducers } from "redux";
import { dataAllUserReducer } from "./reducers/dataUserReducer";

const rootReducers = combineReducers({ dataAllUserReducer });

export default rootReducers;

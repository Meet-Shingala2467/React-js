import { combineReducers } from "redux";
import curdReduser from "./curdReaduser";

const rootCurd = combineReducers({
    curd: curdReduser
})

export default rootCurd
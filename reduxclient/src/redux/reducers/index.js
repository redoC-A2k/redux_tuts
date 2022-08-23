import changeTheNumber from "./upDown";

import { combineReducers} from "redux";

const masterReducer = combineReducers({
    changeTheNumber,
})

export default masterReducer;
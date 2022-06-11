import { combineReducers } from "redux";
import gameReducer from "../game/gameReducer";

const rootReducer=combineReducers({
    taixiu: gameReducer
})

export default rootReducer
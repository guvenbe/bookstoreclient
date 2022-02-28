import {combineReducers} from "redux";
import bookReducer from "./book/bookReducer";
import userReducer from "./user/userReducer";

export default combineReducers({
    // bookReducers: bookReducer
    bookReducer,
    user: userReducer
})
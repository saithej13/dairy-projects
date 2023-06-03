import { loginUserReducer } from "./Reducers/userReducer";
import { authReducer } from "./Reducers/authReducer";
import { salesorderReducer } from "./Reducers/salesorderReducer";
import { milkdataReducer } from "./Reducers/mgmtmilkReducer";


const { createStore, applyMiddleware, combineReducers } = require("redux");
const { default: thunk } = require("redux-thunk");

const reducers = combineReducers({
    userLogin:loginUserReducer,
    userauth:authReducer,
    salesorder:salesorderReducer,
    mgmtmilkdata:milkdataReducer
})

export const store = createStore(reducers,applyMiddleware(thunk))


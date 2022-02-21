import { combineReducers, createStore } from "redux";
import counterUser from "./ducks/users";

const reducer = combineReducers({
  users: counterUser,
});

const store = createStore(reducer);

export default store;

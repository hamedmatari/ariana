import { combineReducers, createStore } from "redux";
import counterUser from "./ducks/users";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "arianaLab",
  storage,
};
const reducer = combineReducers({
  users: counterUser,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { persistor };
export default store;

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

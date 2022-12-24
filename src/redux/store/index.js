import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "../reducers";
import storage from "./localStorage";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const middlewares = [thunkMiddleware];

if (
  process.env.NODE_ENV === "development" &&
  process.env.TARO_ENV !== "quickapp"
) {
  middlewares.push(require("redux-logger").createLogger());
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["LoginInfo"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configStore() {
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
}

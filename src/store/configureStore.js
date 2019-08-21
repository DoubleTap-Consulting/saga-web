import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
// Reducers
import auth from "../reducers/auth";
import featuredTournaments from "../containers/home/components/featured-tournaments/reducer";
import leagues from "../reducers/leagues";
import players from "../reducers/players";
import tournaments from "../reducers/tournaments";
import featuredPlayers from "../containers/home/components/featured-players/reducer";
import marketplace from "../reducers/marketplace";
import profile from "../reducers/profile";
import content from "../reducers/content";
import article from "../reducers/article";
import {
  requestPasswordReset,
  submitPasswordReset
} from "../reducers/password-reset";

/**
 * @var {function} rootReducer - The result of the combineReducers helper function,
 * which turns an object whose values are different reducing functions into a single reducing
 * function you can pass to createStore.
 */
const rootReducer = combineReducers({
  auth,
  requestPasswordReset,
  submitPasswordReset,
  tournaments,
  leagues,
  players,
  marketplace,
  content,
  profile,
  featuredPlayers,
  featuredTournaments,
  article
});
const initialState = {};

const addPromiseSupportToDispatch = store => {
  const rawDispatch = store.dispatch;
  return action => {
    if (typeof action.then === "function") {
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  };
};

/**
 * Takes the root reducer and initial state, and works
 * with thunk to compose the store.
 */
export default function configureStore() {
  let store;

  if (module.hot) {
    store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunkMiddleware, logger),
        ...(window.__REDUX_DEVTOOLS_EXTENSION__
          ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
          : [])
      )
    );
  } else {
    store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunkMiddleware),
        f => f
      )
    );
  }

  store.dispatch = addPromiseSupportToDispatch(store);

  return store;
}

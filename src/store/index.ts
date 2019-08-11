import { applyMiddleware, createStore, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { CocktailState } from "./cocktail/reducer";
import { SearchState } from "./search/reducer";

import SearchReducer from './search/reducer';
import CocktailReducer from './cocktail/reducer';

export interface RootStore {
  Cocktail: CocktailState,
  Search: SearchState
}

const reducers = {
  Cocktail: CocktailReducer,
  Search: SearchReducer,
};

export const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk),
);

export const persistor = persistStore(store);

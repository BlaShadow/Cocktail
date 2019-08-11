import { createReducer, ReducersType } from "../CreateReducer";
import { SET_CURRENT_CRITERIA, SET_SEARCH_IS_WRITING, SET_SEARCHING } from "./action";

export interface SearchState {
  isWriting: boolean;
  isSearching: boolean;
  currentSearchCriteria: string;
}

const defaultState: SearchState = {
  isWriting: false,
  isSearching: false,
  currentSearchCriteria: '',
};

const reducers: ReducersType<SearchState> = {
  [SET_SEARCHING]: (state: SearchState, isSearching: boolean): SearchState => ({...state, isSearching}),
  [SET_CURRENT_CRITERIA]: (state: SearchState, currentSearchCriteria: string): SearchState => ({...state, currentSearchCriteria}),
  [SET_SEARCH_IS_WRITING]: (state: SearchState, isWriting: boolean): SearchState => ({...state, isWriting}),
};

const initialStateValue: SearchState = defaultState;

export default createReducer<SearchState>(initialStateValue, reducers);

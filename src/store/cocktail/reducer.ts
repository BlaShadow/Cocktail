import { Drink } from "../../services/CocktailApiClient";
import { createReducer, ReducersType } from "../CreateReducer";
import { SET_DRINKS } from "./action";

export interface CocktailState {
  list: Drink[]
}

const defaultState: CocktailState = {
  list: [] as Drink[],
};

const reducers: ReducersType<CocktailState> = {
  [SET_DRINKS]: (state: CocktailState, payload: Drink[]): CocktailState => ({...state, list: payload}),
};

const initialStateValue: CocktailState = defaultState;

export default createReducer<CocktailState>(initialStateValue, reducers);
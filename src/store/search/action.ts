import { RootStore } from "../";
import { searchByName } from "../../services/CocktailApiClient";
import { setDrinkAction } from "../cocktail/action";
import { CancelTokenSource } from "axios";

export const SET_CURRENT_CRITERIA = 'SET_CURRENT_CRITERIA';

export const setCurrentCriteriaAction = (criteria: string) => ({
  type: SET_CURRENT_CRITERIA,
  payload: criteria
});

export const SET_SEARCHING = 'SET_SEARCHING';

export const setSearchingAction = (value: boolean) => ({
  type: SET_SEARCHING,
  payload: value,
});

export const SET_SEARCH_IS_WRITING = 'SET_SEARCH_IS_WRITING';

export const setSearchIsWriting = (value: boolean) => ({
  type: SET_SEARCH_IS_WRITING,
  payload: value
});

type ThunkAction = (dispatch: (_: any) => void, getState: () => RootStore) => Promise<any>;

export const searchCocktailWithNameAction = (name: string, cancelToken: CancelTokenSource): ThunkAction => {
  return (dispatch, _) => {
    dispatch(setSearchingAction(true));

    return searchByName(name, cancelToken)
      .then((drinks) => {
        dispatch(setSearchingAction(false));

        dispatch(setDrinkAction(drinks));

        return Promise.resolve(drinks);
      })
      .catch((error) => {
        dispatch(setSearchingAction(false));

        return Promise.reject(error);
      })
  }
}

import { Drink } from "src/services/CocktailApiClient";

export const SET_DRINKS = 'SET_DRINKS';

export const setDrinkAction = (drinks: Drink[]) => ({
  type: SET_DRINKS,
  payload: drinks
});

import axios, { CancelTokenSource, CancelToken } from 'axios';

const baseApiURL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export interface Drink {
  strDrink: string;//  Cocktail name
  strDrinkThumb: string; //, Photo URL
  idDrink: number; // Cocktail ID
}

export interface SearchResult {
  drinks: Drink[];
}

export const searchByName = (name: string, cancelToken: CancelTokenSource): Promise<Drink[]> => {
  const url = `${baseApiURL}search.php?s=${name}`;
  console.log('Performr equest', url, cancelToken.token);
  return axios.get(url, {cancelToken: cancelToken.token})
    .then((response) => {
      const data = response.data;
      const {drinks} = data;
      console.log('Request response', data);
      if (drinks !== null && drinks !== undefined && Array.isArray(drinks)) {
        const cleanResult = drinks.map((item) => ({
          strDrink: item.strDrink, 
          strDrinkThumb: item.strDrinkThumb, 
          idDrink: item.idDrink
        }));

        return Promise.resolve(cleanResult);
      }

      return Promise.resolve([]);
    });
}

import { createContext } from 'react';

type PlanetsDetais = {
  name: string;
  climate: string;
  population: string;
  terrain: string;
  residents: string[];
};

type Planets<PlanetsDetais> = {
  planets: PlanetsDetais[];
  planetselected: string;
};

interface IContext<Planets> {
  state: Planets;
  dispatch: Function;
}

export const AppContext = createContext<IContext<Planets<PlanetsDetais>>>(
  {} as IContext<Planets<PlanetsDetais>>
);

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'createList':
      return { planets: action.payload };
    case 'planetSelected':
      return { ...state, planetselected: action.payload };
    default:
      return state;
  }
};

export const initialState = {
  planets: new Array(),
  planetselected: null,
};

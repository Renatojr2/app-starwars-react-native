import { createContext } from 'react';
interface contextProps {
  state: [];
  action: [];
}
export const AppContext = createContext();

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'createList':
      return { planets: action.payload };
    case 'planetSelected':
      return { ...state, planetselected: action.payload };
    case 'residents':
      return { ...state, residents: action.payload };
    default:
      return state;
  }
};

export const initialState = {
  planets: new Array(),
  planetselected: null,
  residents: new Array(),
};

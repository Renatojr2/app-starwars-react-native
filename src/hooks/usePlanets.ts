import { useContext, useEffect } from 'react';

import api from '../service/api';

import { AppContext } from '../context/appContext';

export const usePlanets = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    api.get(`/planets/?page=1`).then((res) => {
      const action = { type: 'createList', payload: res.data.results };
      dispatch(action);

      //   data.map(({ residents }) => {
      //     setPath(residents);
      //   });

      //   path.map((path) => {
      //     api.get(path).then((res) => setResidents(res.data));
      //   });
    });
  }, []);

  return { planets: state.planets };
};

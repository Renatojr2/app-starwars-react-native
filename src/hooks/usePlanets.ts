import { useContext, useEffect, useState } from 'react';

import api from '../service/api';

import { AppContext } from '../context/appContext';

interface IdataResident {
  next: string;
  previous: string;
}

export const usePlanets = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<IdataResident>();
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    api.get(`/planets/?page=${page}`).then((res) => {
      setData(res.data);
      const action = { type: 'createList', payload: res.data.results };
      dispatch(action);
    });
  }, [page]);

  return { planets: state.planets, page, setPage, data };
};

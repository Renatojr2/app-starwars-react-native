import { useState, useEffect } from 'react';
import api from '../service/api';
import { useContext } from 'react';
import { AppContext } from '../../src/context/appContext';

export const useReseidents = () => {
  // // const { state } = useContext(AppContext);
  // const [resident, setResident] = useState();
  // useEffect(() => {
  //   const paths = state.residents;
  //   paths.map((path) => {
  //     api.get(path).then((res) => {
  //       setResident(res.data);
  //     });
  //   });
  // }, []);
  // return { resident };
};

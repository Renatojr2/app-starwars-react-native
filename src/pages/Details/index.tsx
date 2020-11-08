import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { AppContext } from '../../context/appContext';
import axios from 'axios';

const Details: React.FC = () => {
  // const { resident } = useReseidents();
  const [residents, setResidents] = useState<string[]>([].flat());
  const { state } = useContext(AppContext);
  const details = state.planets.filter(
    (planet: string) => planet.name === state.planetselected
  )[0];

  useEffect(() => {
    details.residents.forEach(async (item) => {
      const result = await axios.get(item);
      setResidents((state: string[]) => {
        return [...state, result.data];
      });
    });
  }, []);

  return (
    <>
      <View>
        <Text>{details.name}</Text>
        <Text>{details.climate}</Text>
        <Text>{details.terrain}</Text>
        <Text>{details.population}</Text>
      </View>
      {residents === undefined ? (
        <Text>Loading</Text>
      ) : (
        residents.map((item) => (
          <>
            <Text>{item.name}</Text>
            <Text>{item.mass}</Text>
          </>
        ))
      )}
    </>
  );
};

export default Details;

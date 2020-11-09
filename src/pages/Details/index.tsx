import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { AppContext } from '../../context/appContext';
import axios from 'axios';
import { useFonts } from 'expo-font';

import PlanetsDetails from '../../components/PlanetsDetails';
import ResidentsDetails from '../../components/ResidentsDetails';

import { styles } from './style';
import NotResident from '../../components/NotResident';

interface IResidents {
  name: string;
  mass: string;
  created: string;
}

const Details: React.FC = () => {
  const [residents, setResidents] = useState<IResidents[]>([]);
  const [flag, setFlag] = useState(false);
  const { state } = useContext(AppContext);
  const details = state.planets.filter(
    (planet) => planet.name === state.planetselected
  )[0];
  const [loaded] = useFonts({
    Starjedi: require('../../assets/fonts/Starjedi.ttf'),
  });

  useEffect(() => {
    details.residents.forEach((item) => {
      axios.get(item).then((res) => {
        setResidents((state: IResidents[]) => {
          return [...state, res.data];
        });
      });
      setFlag(true);
    });
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <PlanetsDetails
          name={details.name}
          terrain={details.terrain}
          climate={details.climate}
          population={details.population}
        />
        <Text style={styles.title}>Residentes</Text>
        <View style={styles.card}>
          {residents.length === 0 && flag === false ? (
            <NotResident />
          ) : (
            <FlatList
              data={residents}
              style={{ marginRight: 15 }}
              horizontal
              keyExtractor={(item, index) => item.name + index}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ResidentsDetails name={item.name} mass={item.mass} />
              )}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default Details;

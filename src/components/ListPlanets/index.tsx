import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import { styles } from './style';

interface Props {
  name: string;
  population: string;
  onPress: Function;
}

const ListPlanets: React.FC<Props> = ({ name, population, onPress }) => {
  const [loaded] = useFonts({
    Starjedi: require('../../assets/fonts/Starjedi.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => onPress()}>
        <View>
          <Text style={styles.title}>
            {name === 'unknown' ? 'Sem informação' : name}
          </Text>
          <Text style={styles.subTitle}>
            População:{' '}
            {population === 'unknown' ? 'Sem informação' : population}
          </Text>
        </View>
        <AntDesign name="right" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default ListPlanets;

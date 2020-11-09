import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

interface Props {
  name: string;
  terrain: string;
  climate: string;
  population: string;
}

const PlanetsDetails: React.FC<Props> = ({
  name,
  terrain,
  climate,
  population,
}) => {
  return (
    <View style={styles.planetContainer}>
      <Text style={styles.title}>
        {name === 'unknown' ? 'Sem informação' : name}
      </Text>

      <View style={styles.textContainer}>
        <View style={styles.textGroupTerrain}>
          <Text style={styles.subTitle}>Terra</Text>
          <Text style={styles.textDetails}>
            {terrain === 'unknown' ? 'Sem informação' : terrain}
          </Text>
        </View>
        <View style={styles.textGroupContainer}>
          <View style={styles.textGroupClimate}>
            <Text style={styles.subTitle}>Clima</Text>
            <Text style={styles.textDetails}>
              {climate === 'unknown' ? 'Sem informação' : climate}
            </Text>
          </View>

          <View style={styles.textGroup}>
            <Text style={styles.subTitle}>População</Text>
            <Text style={styles.textDetails}>
              {population === 'unknown' ? 'Sem informação' : population}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlanetsDetails;

import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

interface Props {
  name: string;
  mass: string;
}

const ResidentsDetails: React.FC<Props> = ({ name, mass }) => {
  return (
    <View style={styles.residentContainer}>
      <Text style={styles.titleName}>{name}</Text>
      <View style={styles.residentTextContainer}>
        <Text style={styles.description}>Massa</Text>
        <Text style={styles.textDetails}>
          {mass === 'unknown' ? 'Sem informação' : mass}
        </Text>
      </View>
    </View>
  );
};

export default ResidentsDetails;

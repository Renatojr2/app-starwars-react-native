import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import { styles } from './style';

const AppBarIcon: React.FC = () => {
  const [loaded] = useFonts({
    Starjedi: require('../../assets/fonts/Starjedi.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StarWars</Text>
      <FontAwesome5 name="jedi" size={24} color="black" />
    </View>
  );
};

export default AppBarIcon;

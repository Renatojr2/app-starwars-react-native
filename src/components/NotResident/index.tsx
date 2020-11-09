import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import { styles } from './style';

const NotResident: React.FC = () => {
  const [loaded] = useFonts({
    Starjedi: require('../../assets/fonts/Starjedi.ttf'),
  });

  if (!loaded) {
    return null;
  }
  const msg = 'ops! Não há Residentes por aqui';
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.description}>{msg}</Text>
        <View style={{ opacity: 0.1 }}>
          <FontAwesome5 name="jedi" size={200} color="black" />
        </View>
      </SafeAreaView>
    </>
  );
};

export default NotResident;

import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { usePlanets } from '../../hooks/usePlanets';
import ListItem from '../../components/ListItem';
import { AppContext } from '../../context/appContext';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { dispatch, state } = useContext(AppContext);
  let { planets } = usePlanets();

  const handleNextPage = (item: string) => {
    const action = { type: 'planetSelected', payload: item };
    dispatch(action);
    navigation.navigate('Details');
  };

  return (
    <>
      <View style={{ flex: 8 }}>
        <FlatList
          data={planets}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              population={item.population}
              onPress={() => handleNextPage(item.name)}
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <Text>Anterior</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Proximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Home;

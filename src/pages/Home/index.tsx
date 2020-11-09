import React, { useContext, useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';

import { usePlanets } from '../../hooks/usePlanets';
import ListItem from '../../components/ListItem';
import { AppContext } from '../../context/appContext';
import { useNavigation } from '@react-navigation/native';
import Buttons from '../../components/Buttons';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { dispatch } = useContext(AppContext);
  let { planets, page, setPage, data } = usePlanets();

  const [loaded] = useFonts({
    Starjedi: require('../../assets/fonts/Starjedi.ttf'),
  });

  const handlePageDetails = (item: string) => {
    const action = { type: 'planetSelected', payload: item };
    dispatch(action);
    navigation.navigate('Details');
  };

  const handleNextPage = () => {
    if (data!.next !== null) {
      setPage(++page);
    } else {
      setPage(page);
    }
  };
  const handlePreviousPage = () => {
    if (data!.previous !== null) {
      setPage(--page);
    } else {
      setPage(page);
    }
  };

  if (!loaded) {
    return null;
  }

  return (
    <>
      <SafeAreaView style={{ flex: 8 }}>
        <FlatList
          data={planets}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              population={item.population}
              onPress={() => handlePageDetails(item.name)}
            />
          )}
        />
      </SafeAreaView>
      <Buttons
        onPressPreviousPage={handlePreviousPage}
        onPressNextPage={handleNextPage}
      />
    </>
  );
};

export default Home;

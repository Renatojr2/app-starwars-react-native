import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Details from './src/pages/Details';

import { AppContext, appReducer, initialState } from './src/context/appContext';

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <NavigationContainer>
      <AppContext.Provider value={{ state, dispatch }}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  );
}

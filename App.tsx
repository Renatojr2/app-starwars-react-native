import React, { useReducer } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Details from './src/pages/Details';
import AppBarIcon from './src/components/AppBarIcon';

import { AppContext, appReducer, initialState } from './src/context/appContext';

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <NavigationContainer>
      <AppContext.Provider value={{ state, dispatch }}>
        <StatusBar barStyle="default" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitle: () => <AppBarIcon />,
            headerStyle: {
              backgroundColor: '#F5B717',
            },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  );
}

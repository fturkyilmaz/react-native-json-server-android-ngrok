import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import HomeBasicContext from './src/pages/HomeBasicContext';
import {MainContextProvider} from './src/context/MyContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MainContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeBasicContext" component={HomeBasicContext} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </MainContextProvider>
  );
}

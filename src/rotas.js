import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home.js';
import User_git from './pages/user_git.js';
import Not_found from './pages/not_found.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User_git" component={User_git} />
        <Stack.Screen name="Not_found" component={Not_found} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
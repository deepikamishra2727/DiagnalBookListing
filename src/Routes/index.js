import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookListing } from '../screens/BookListing';
import { LandingScreen } from '../screens/LandingScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"LandingScreen"}>
          <Stack.Screen name={"LandingScreen"} component={LandingScreen} />
          <Stack.Screen name={"BookListing"} component={BookListing} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );

}

export default Navigator;
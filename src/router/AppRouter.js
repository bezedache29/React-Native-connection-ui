import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Se connecter", headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ title: "S'enregistrer", headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
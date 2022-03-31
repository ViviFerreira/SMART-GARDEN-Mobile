import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Welcome from "~/components/screens/Welcome/index";
import LoginScreen from "~/components/screens/LoginScreen/index";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="LogIn" component={LoginScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

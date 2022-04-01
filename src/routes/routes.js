import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Welcome from '~/components/screens/Welcome/';
import Cadastro from '~/components/screens/Cadastro';

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
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}

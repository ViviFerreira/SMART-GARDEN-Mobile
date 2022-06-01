import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colorPrimary, colorRed, colorStatusBar } from '~/components/UI/variaveis';

import home from '../../../assets/navigation/home.png';
import plant from '../../../assets/navigation/plant.png';
import plantation from '../../../assets/navigation/plantation.png';
import irrigation from '../../../assets/navigation/irrigation.png';

import Home from '~screens/Home';
import Plant from '~screens/Plant';
import Plantation from '~screens/Plantation';
import Irrigation from '~screens/Irrigation';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = home;
              break;
            case 'Plant':
              iconName = plant;
              break;
            case 'Plantation':
              iconName = plantation;
              break;
            case 'Irrigation':
              iconName = irrigation;
              break;
          }

          return <Image source={iconName} style={{ width: 32, height: 32 }} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeBackgroundColor: colorStatusBar,
        inactiveBackgroundColor: colorPrimary,
        showLabel: false,
        keyboardHidesTabBar: true,
        tabBarStyle: { },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Plant" component={Plant} />
      <Tab.Screen name="Plantation" component={Plantation} />
      <Tab.Screen name="Irrigation" component={Irrigation} />
    </Tab.Navigator>
  );
}

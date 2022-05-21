import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colorPrimary } from '~/components/UI/variaveis';

import home from '../../../assets/navigation/home.png';
import plantar from '../../../assets/navigation/plantar.png';
import plantacao from '../../../assets/navigation/plantacao.png';
import irrigacao from '../../../assets/navigation/irrigacao.png';

import Home from '~screens/Home';
import Plantar from '~screens/Plantar';
import Plantacao from '~screens/Plantacao';
import Irrigacao from '~screens/Irrigacao';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = home;
              break;
            case 'Plantar':
              iconName = plantar;
              break;
            case 'Plantacao':
              iconName = plantacao;
              break;
            case 'Irrigacao':
              iconName = irrigacao;
              break;
          }

          return <Image source={iconName} style={styles.icon} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: colorPrimary,
        inactiveBackgroundColor: colorPrimary,
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Plantar" component={Plantar} />
      <Tab.Screen name="Plantacao" component={Plantacao} />
      <Tab.Screen name="Irrigacao" component={Irrigacao} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});

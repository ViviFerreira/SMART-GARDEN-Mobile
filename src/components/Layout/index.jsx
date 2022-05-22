import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Main } from './styled';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';
import { colorStatusBar } from '../UI/variaveis';

export default function Layout({ children }) {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colorStatusBar} />
      <Header />
      <Main>{children}</Main>
    </SafeAreaView>
  );
}

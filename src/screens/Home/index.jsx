import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Header from '~components/Header';

export default function Home() {
  return (
    <View>
      <SafeAreaView>
        <Header />
        <Text>Conteúdo</Text>
      </SafeAreaView>
    </View>
  );
}

import React from 'react';
import { Text, View } from 'react-native';
import Layout from '~/components/Layout';
import { TitleScreens } from '~/components/TitleScreens';

export default function Plantation() {
  return (
    <Layout>
      <TitleScreens style={{ padding: 20 }}>Progressao dos itens</TitleScreens>
    </Layout>
  );
}

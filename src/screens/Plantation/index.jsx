import React from 'react';
import Layout from '~/components/Layout';
import { Feather } from '@expo/vector-icons';
import { SearchBar, SearchInput } from './styles';
import { TitleScreens } from '~/components/TitleScreens';

export default function Plantation() {
  return (
    <Layout>
      <SearchBar>
        <Feather name="search" size={24} color="black" />
        <SearchInput placeholder="Buscar" placeholderTextColor="black" />
      </SearchBar>
      <TitleScreens style={{ padding: 10 }}>Progressao dos itens</TitleScreens>
    </Layout>
  );
}

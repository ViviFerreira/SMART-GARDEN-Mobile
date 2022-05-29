import React from 'react';
import { FlatList } from 'react-native';
import Layout from '~/components/Layout';
import { Feather } from '@expo/vector-icons';
import {
  SearchBar,
  SearchInput,
  CardProduct,
  CircleImgProduct,
  ImgProduct,
  TextCard,
  ProgressBar,
  BarPercentage,
  FlexContent,
  MoreOptions,
} from './styles';
import { TitleScreens } from '~/components/TitleScreens';
import banana from '../../../assets/plantation/banana.png';
import lettuce from '../../../assets/plantation/lettuce.png';

export default function Plantation() {
  const products = [
    {
      id: 1,
      nome: 'Banana',
      categoria: 'Frutas',
      img: banana,
      colheita: '330 a 450 dias',
      progresso: '30',
    },
    {
      id: 2,
      nome: 'Alface',
      categoria: 'Frutas',
      img: lettuce,
      colheita: '330 a 450 dias',
      progresso: '25',
    },
    {
      id: 3,
      nome: 'Banana',
      categoria: 'Frutas',
      img: banana,
      colheita: '330 a 450 dias',
      progresso: '10',
    },
    {
      id: 4,
      nome: 'Alface',
      categoria: 'Frutas',
      img: lettuce,
      colheita: '330 a 450 dias',
      progresso: '50',
    },
  ];

  return (
    <Layout>
      <SearchBar>
        <Feather name="search" size={24} color="black" />
        <SearchInput placeholder="Buscar" placeholderTextColor="black" />
      </SearchBar>
      <TitleScreens style={{ padding: 10 }}>Progressao dos itens</TitleScreens>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <CardProduct>
            <FlexContent>
              <CircleImgProduct>
                <ImgProduct source={item.img} />
              </CircleImgProduct>
              <Feather name="more-vertical" size={24} color="white" />
            </FlexContent>
            <TextCard>{item.nome}</TextCard>
            <TextCard>Categoria: {item.categoria} </TextCard>
            <TextCard>Colheita: {item.colheita}</TextCard>
            <TextCard>Progresso: {item.progresso}%</TextCard>
            <ProgressBar>
              <BarPercentage percentage={item.progresso} />
            </ProgressBar>
          </CardProduct>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </Layout>
  );
}

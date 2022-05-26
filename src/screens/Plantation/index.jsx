import React from 'react';
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
} from './styles';
import { TitleScreens } from '~/components/TitleScreens';
import banana from '../../../assets/plantation/banana.png';
import lettuce from '../../../assets/plantation/lettuce.png';

export default function Plantation() {
  return (
    <Layout>
      <SearchBar>
        <Feather name="search" size={24} color="black" />
        <SearchInput placeholder="Buscar" placeholderTextColor="black" />
      </SearchBar>
      <TitleScreens style={{ padding: 10 }}>Progressao dos itens</TitleScreens>
      {[banana, lettuce, banana, lettuce].map((product) => (
        <CardProduct>
          <FlexContent>
            <CircleImgProduct>
              <ImgProduct source={product} />
            </CircleImgProduct>
            <Feather name="more-vertical" size={24} color="white" />
          </FlexContent>
          <TextCard>Banana</TextCard>
          <TextCard>Categoria: Frutas</TextCard>
          <TextCard>Colheita: 330 a 450 dias</TextCard>
          <TextCard>Progresso: 27%</TextCard>
          <ProgressBar>
            <BarPercentage />
          </ProgressBar>
        </CardProduct>
      ))}
    </Layout>
  );
}

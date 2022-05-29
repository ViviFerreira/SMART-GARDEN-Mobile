import React from 'react';
import { FlatList, View } from 'react-native';
import Layout from '~/components/Layout';
import { Feather } from '@expo/vector-icons';
import {
  CardIrrigation,
  ImgProduct,
  TextCard,
  FlexContent,
  Separator,
} from './styles';
import { TitleScreens } from '~/components/TitleScreens';
import bananas from '../../../assets/irrigation/bananas.jpg';
import pumpkins from '../../../assets/irrigation/pumpkins.jpg';
import Button from '~/components/global/Button/index';

export default function Irrigation() {
  const products = [
    {
      id: 1,
      nome: 'Bananas',
      horario: '7:30am',
      img: bananas,
      area: '6m²',
      estado: 'Irrigado',
    },
    {
      id: 2,
      nome: 'Abóboras',
      horario: '11:00am',
      img: pumpkins,
      area: '6m²',
      estado: 'Irrigado',
    },
    {
      id: 3,
      nome: 'Bananas',
      horario: '03:30pm',
      img: bananas,
      area: '6m²',
      estado: 'Não irrigado',
    },
    {
      id: 4,
      nome: 'Abóboras',
      horario: '05:00pm',
      img: pumpkins,
      area: '6m²',
      estado: 'Irrigado',
    },
  ];

  return (
    <Layout>
      <TitleScreens style={{ padding: 10 }}>Irrigação</TitleScreens>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <CardIrrigation>
            <ImgProduct source={item.img} />
            <FlexContent>
              <View>
                <TextCard>{item.nome}</TextCard>
                <TextCard>Horario: {item.horario} </TextCard>
                <TextCard>Área: {item.area}</TextCard>
                <TextCard>Estado: {item.estado}</TextCard>
              </View>
              <Feather name="more-vertical" size={24} color="white" />
            </FlexContent>
          </CardIrrigation>
        )}
        keyExtractor={(item) => String(item.id)}
      />
      <Separator />
      <Button> Adicionar </Button>
    </Layout>
  );
}

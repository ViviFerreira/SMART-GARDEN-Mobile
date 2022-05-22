import React from 'react';
import { Image, View } from 'react-native';
import Layout from '~components/Layout';
import {
  CardWelcome,
  TextWelcome,
  CardTasks,
  Title,
  NextTask,
  TextTask,
  ContainerBtn,
  Link,
  BtnPlantar,
  TextBtn,
} from './styled';
import icon from '../../../assets/IconWelcomeHome.png';

export default function Home() {
  return (
    <Layout>
      <CardWelcome>
        <View>
          <TextWelcome>Bem Vindo(a) José</TextWelcome>
          <TextWelcome>O que vamos plantar esse mês?</TextWelcome>
        </View>
        <Image source={icon} />
      </CardWelcome>
      <CardTasks>
        <Title>Suas tarefas</Title>
        <NextTask>
          <TextTask>Nada por enquanto...</TextTask>
          <TextTask>
            Quando houverem tarefas pendentes elas aparecerão aqui
          </TextTask>
        </NextTask>
        <ContainerBtn>
          <Link>Começar a plantar</Link>
          <BtnPlantar>
            <TextBtn>Área de Cultivo</TextBtn>
          </BtnPlantar>
        </ContainerBtn>
      </CardTasks>
    </Layout>
  );
}

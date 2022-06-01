import React from "react";
import Layout from "~/components/Layout";

import { FlatList } from "react-native";

import { Feather } from "@expo/vector-icons";

import { TitleScreens } from "~/components/TitleScreens";

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
  Icons,
} from "./styles";

import banana from "../../../assets/plantation/banana.png";
import lettuce from "../../../assets/plantation/lettuce.png";

import { Platform, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function Plantation() {
  const { width } = Dimensions.get("window");

  const products = [
    {
      id: 1,
      nome: "Banana",
      categoria: "Frutas",
      img: banana,
      colheita: "330 a 450 dias",
      progresso: "30",
    },
    {
      id: 2,
      nome: "Alface",
      categoria: "Frutas",
      img: lettuce,
      colheita: "330 a 450 dias",
      progresso: "25",
    },
    {
      id: 3,
      nome: "Banana",
      categoria: "Frutas",
      img: banana,
      colheita: "330 a 450 dias",
      progresso: "10",
    },
    {
      id: 4,
      nome: "Alface",
      categoria: "Frutas",
      img: lettuce,
      colheita: "330 a 450 dias",
      progresso: "50",
    },
  ];

  return (
    <Layout>
      <SearchBar>
        <Feather name="search" size={24} color="black" />
        <SearchInput placeholder="Buscar" placeholderTextColor="black" />
      </SearchBar>
      <TitleScreens style={{ padding: 15, marginLeft: 5 }}>
        Progressão dos itens
      </TitleScreens>
      <FlatList
        style={{
          marginTop: 4,
          marginBottom: Platform.OS === "ios" ? `${RFPercentage(3)}%` : `${RFPercentage(5)}%`,
        }}
        data={products}
        renderItem={({ item, index }) => (
          <CardProduct key={index}>
            <FlexContent>
              <CircleImgProduct>
                <ImgProduct source={item.img} />
              </CircleImgProduct>
              <Icons name="more-vertical" />
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

import styled from "styled-components/native";

import * as Colors from "~components/UI/variaveis";

import { RFValue } from "react-native-responsive-fontsize";

import { Feather } from "@expo/vector-icons";

export const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 35px;
  margin: 5px auto;
  background-color: ${Colors.colorWhite};
  padding: 5px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const Icons = styled(Feather)`
  color: ${Colors.colorWhite};
  font-size: ${RFValue(24)}px;
`;

export const SearchInput = styled.TextInput`
  font-size: 15px;
  margin-left: 10px;
`;

export const CardProduct = styled.View`
  width: 90%;
  height: ${Platform.OS === "ios" ? 275 : 285}px;
  margin: 2px auto;
  background-color: ${Colors.colorBgPrimary};
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const FlexContent = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const CircleImgProduct = styled.View`
  width: 80px;
  height: 80px;
  margin: 10px auto;
  background-color: ${Colors.colorWhite};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const ImgProduct = styled.Image`
  width: 50px;
  height: 50px;
`;

export const TextCard = styled.Text`
  color: ${Colors.colorWhite};
  font-size: 18px;
  padding: 5px;
  font-weight: 900;
  font-weight: bold;
`;
export const ViewProgressBar = styled.View`
  padding: 15px 5px;
`;
export const BarPercentage = styled.View`
  background-color: ${Colors.colorPrimary};
  width: ${(props) => props.percentage}%;
  border-radius: 10px;
  height: 100%;
`;

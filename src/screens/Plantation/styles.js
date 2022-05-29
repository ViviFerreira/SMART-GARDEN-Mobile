import styled from 'styled-components/native';
import {
  colorWhite,
  colorPrimary,
  colorBgPrimary,
} from '~components/UI/variaveis';
import { Feather } from '@expo/vector-icons';

export const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 35px;
  margin: 5px auto;
  background-color: ${colorWhite};
  padding: 5px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const SearchInput = styled.TextInput`
  font-size: 15px;
  margin-left: 10px;
`;

export const CardProduct = styled.View`
  width: 95%;
  height: 300px;
  margin: 2px auto;
  background-color: ${colorBgPrimary};
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
  background-color: ${colorWhite};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const ImgProduct = styled.Image`
  width: 50px;
  height: 50px;
`;

export const TextCard = styled.Text`
  color: ${colorWhite};
  font-size: 18px;
  padding: 5px;
  font-weight: 900;
  font-weight: bold;
`;
export const ProgressBar = styled.View`
  width: 100%;
  height: 5%;
  margin: 15px auto;
  background-color: ${colorWhite};
  border-radius: 10px;
`;
export const BarPercentage = styled.View`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: ${colorPrimary};
  border-radius: 10px;
`;

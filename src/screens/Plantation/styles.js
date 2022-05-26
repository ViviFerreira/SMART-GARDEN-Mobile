import styled from 'styled-components/native';
import { colorWhite } from '~components/UI/variaveis';

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

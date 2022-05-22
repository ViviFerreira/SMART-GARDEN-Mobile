import styled from 'styled-components/native';
import { colorPrimary, colorWhite } from '../../UI/variaveis';

export const StyledHeader = styled.View`
  height: 60px;
  background-color: ${colorPrimary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  color: ${colorWhite};
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerTitle = styled.View`
  width: 160px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Logo = styled.Image`
  width: 25px;
  height: 25px;
`;

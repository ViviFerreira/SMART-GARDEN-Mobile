import styled from 'styled-components/native';
import { colorPrimary } from '../UI/variaveis';

export const StyledHeader = styled.View`
  height: 80px;
  background-color: ${colorPrimary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

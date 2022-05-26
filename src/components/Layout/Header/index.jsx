import React from 'react';
import { Feather, Octicons } from '@expo/vector-icons';
import { StyledHeader, Title, ContainerTitle, Logo } from './styles';
import logo from '../../../../assets/LogoBranca.png';

export default function Header() {
  return (
    <StyledHeader>
      <Octicons name="three-bars" size={24} color="white" />
      <ContainerTitle>
        <Logo source={logo} />
        <Title>Smart Garden</Title>
      </ContainerTitle>
      <Feather name="search" size={24} color="white" />
    </StyledHeader>
  );
}

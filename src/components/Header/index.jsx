import React from 'react';
import { Feather, Octicons } from '@expo/vector-icons';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import { StyledHeader } from './styled';

export default function Header() {
  return (
    <StyledHeader>
      <Octicons name="three-bars" size={24} color="white" />
      <Text>Smart Garden</Text>
      <Feather name="search" size={24} color="white" />
    </StyledHeader>
  );
}

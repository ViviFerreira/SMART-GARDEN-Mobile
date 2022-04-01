import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';
import { colorWhite } from '../UI/variaveis';

export default Link = ({ children, style, to }) => {
  const navigation = useNavigation();

  return (
    <Text
      onPress={() => navigation.navigate(to)}
      style={[styles.textoContent, style]}
    >
      {children}
    </Text>
  );
};

export const styles = StyleSheet.create({
  textoContent: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 50,
    fontSize: 18,
    color: colorWhite,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

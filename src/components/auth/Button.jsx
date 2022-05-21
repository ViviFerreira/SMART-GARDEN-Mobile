import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colorPrimary, colorWhite } from '../UI/variaveis';

export default Button = ({ name, handle }) => {
  return (
    <TouchableOpacity style={style.botao} onPress={() => handle()}>
      <Text style={style.botaoText}>{name}</Text>
    </TouchableOpacity>
  );
};

export const style = StyleSheet.create({
  botao: {
    width: '100%',
    padding: 15,
    backgroundColor: colorPrimary,
    borderRadius: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoText: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: 'bold',
    color: colorWhite,
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colorWhite } from '../UI/variaveis';

export default InputArea = ({ children }) => {
  return <View style={style.inputArea}>{children}</View>;
};

export const style = StyleSheet.create({
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 20,
    backgroundColor: colorWhite,
    borderRadius: 30,
    marginTop: 15,
  },
});

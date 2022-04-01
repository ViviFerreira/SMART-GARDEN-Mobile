import React from 'react';
import { StyleSheet, View } from 'react-native';

export default Link = ({ children, router }) => {
  return <View style={style.textoContent}>{children}</View>;
};

export const style = StyleSheet.create({
  textoContent: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 50,
  },
});

import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import fundo from '../../../assets/fundo.png';

export default Background = ({ children }) => {
  return (
    <ImageBackground source={fundo} resizeMode="cover" style={style.fundo}>
      {children}
    </ImageBackground>
  );
};

export const style = StyleSheet.create({
  fundo: {
    flex: 1,
  },
});

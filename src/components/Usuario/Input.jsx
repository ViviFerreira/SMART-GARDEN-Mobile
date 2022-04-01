import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colorBlack } from '../UI/variaveis';

export default Input = ({ campo, setValue, ocultarCampo = false }) => {
	return (
		<TextInput
			style={style.input}
			placeholder={campo}
			placeholderTextColor={colorBlack}
			secureTextEntry={ocultarCampo}
			onChangeText={(value) => setValue(value)}
		/>
	);
};

export const style = StyleSheet.create({
	input: {
		width: '100%',
		marginLeft: 10,
		fontSize: 18,
		fontWeight: 'bold',
	},
});

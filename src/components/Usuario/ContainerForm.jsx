import React from 'react';
import { StyleSheet, View } from 'react-native';

export default ContainerForm = ({ children }) => {
	return <View style={style.form}>{children}</View>;
};

export const style = StyleSheet.create({
	form: {
		width: '100%',
		marginTop: 50,
	},
});

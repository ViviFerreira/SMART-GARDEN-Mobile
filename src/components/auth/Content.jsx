import React from 'react';
import { StyleSheet, View } from 'react-native';

export default Content = ({ children }) => {
	return <View style={style.content}>{children}</View>;
};

export const style = StyleSheet.create({
	content: {
		flex: 1,
		paddingHorizontal: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

import { StyleSheet } from 'react-native';
import { colorWhite, colorPrimary } from '../../components/UI/variaveis';

export const style = StyleSheet.create({
	container: {
		flex: 1,
	},

	content: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},

	circuloLogo: {
		width: 150,
		height: 150,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 80,
		borderRadius: 100,
		borderColor: colorWhite,
		borderWidth: 3,
		borderStyle: 'solid',
	},
	logo: {
		width: 100,
		height: 100,
		marginLeft: 15,
	},

	title: {
		fontSize: 30,
		textAlign: 'center',
		marginTop: 20,
		color: colorWhite,
	},

	fundo: {
		flex: 1,
	},

	form: {
		width: '100%',
		marginTop: 50,
	},

	inputArea: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		padding: 10,
		paddingLeft: 20,
		backgroundColor: colorWhite,
		borderRadius: 30,
		marginTop: 15,
	},
	input: {
		width: '100%',
		marginLeft: 10,
		fontSize: 18,
		fontWeight: 'bold',
	},

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

	loginContent: {
		width: '100%',
		alignItems: 'flex-start',
		marginTop: 50,
	},
	login: {
		color: colorWhite,
		marginTop: 10,
		textAlign: 'left',
		fontSize: 18,
		fontWeight: 'bold',
	},
});

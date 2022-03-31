import React, { useState } from 'react';
import {
	View,
	Image,
	Text,
	ImageBackground,
	TextInput,
	TouchableOpacity,
    Linking
} from 'react-native';
import  style  from './style';
import fundo from '../../../assets/fundo.png';
import logo from '../../../assets/logo_verde.png';
import {
	AntDesign,
	MaterialCommunityIcons,
	Ionicons,
} from '@expo/vector-icons';
import { colorBlack, colorPrimary } from '../../components/UI/variaveis';

export default Login = () => {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [confirmarSenha, setConfirmarSenha] = useState('');

	const cadastrar = () => {
		console.log(nome, email, senha, confirmarSenha);
		alert('Perfil cadastrado');
	};

	return (
		<View style={style.container}>
			<ImageBackground source={fundo} resizeMode='cover' style={style.fundo}>
				<View style={style.content}>
					<View style={style.circuloLogo}>
						<Image style={style.logo} source={logo} />
					</View>
					<View style={style.form}>
						
						<View style={style.inputArea}>
							<MaterialCommunityIcons
								name='email-outline'
								size={20}
								color={colorPrimary}
							/>
							<TextInput
								style={style.input}
								placeholder='E-mail'
								placeholderTextColor={colorBlack}
								onChangeText={(value) => setEmail(value)}
							/>
						</View>

						<View style={style.inputArea}>
							<Ionicons name='lock-closed-outline' size={20} color={colorPrimary} />
							<TextInput
								style={style.input}
								placeholder='Senha'
								placeholderTextColor={colorBlack}
								secureTextEntry={true}
								onChangeText={(value) => setSenha(value)}
							/>
						</View>
					</View>

					<TouchableOpacity style={style.botao} onPress={() => cadastrar()}>
						<Text style={style.botaoText}>Cadastrar</Text>
					</TouchableOpacity>

					<View style={style.loginContent}>
						<Text style={style.login}>Criar conta</Text>
						<Text style={style.login}>Esqueceu a senha?</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

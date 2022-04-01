import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { colorPrimary, colorWhite } from '../../components/UI/variaveis';
import Fundo from '../../components/Usuario/Background';
import Content from '../../components/Usuario/Content';
import Logo from '../../components/Usuario/Logo';
import ContainerForm from '../../components/Usuario/ContainerForm';
import InputArea from '../../components/Usuario/InputArea';
import Input from '../../components/Usuario/Input';
import Botao from '../../components/Usuario/Button';
import Link from '../../components/Usuario/Link';

export default Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = () => {
    console.log(email, senha);
  };

  return (
    <Fundo>
      <Content>
        <Logo />
        <ContainerForm>
          <InputArea>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color={colorPrimary}
            />
            <Input campo="Email" setValue={setEmail} />
          </InputArea>
          <InputArea>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={colorPrimary}
            />
            <Input ocultarCampo={true} campo="Senha" setValue={setSenha} />
          </InputArea>
        </ContainerForm>
        <Botao nome="Logar" acao={logar} />
        <Link>
          <Text style={style.texto}>Ainda não tenho uma conta</Text>
          <Text style={style.texto}>Esqueci minha senha</Text>
        </Link>
      </Content>
    </Fundo>
  );
};

export const style = StyleSheet.create({
  texto: {
    color: colorWhite,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

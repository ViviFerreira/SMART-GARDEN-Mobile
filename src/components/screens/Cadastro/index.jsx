import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet } from 'react-native';
import { colorPrimary, colorWhite } from '~/components/UI/variaveis';
import Background from '~/components/Usuario/Background';
import Content from '~/components/Usuario/Content';
import Logo from '~/components/Usuario/Logo';
import ContainerForm from '~/components/Usuario/ContainerForm';
import InputArea from '~/components/Usuario/InputArea';
import Input from '~/components/Usuario/Input';
import Button from '~/components/Usuario/Button';
import Link from '~/components/Usuario/Link';

import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';

export default Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const navigation = useNavigation();

  const cadastrar = () => {
    console.log(nome, email, senha, confirmarSenha);
    alert('Perfil cadastrado');
  };

  return (
    <Background>
      <Content>
        <Logo />
        <ContainerForm>
          <InputArea>
            <AntDesign name="user" size={20} color={colorPrimary} />
            <Input campo="Nome" setValue={setNome} />
          </InputArea>
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
          <InputArea>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={colorPrimary}
            />
            <Input
              ocultarCampo={true}
              campo="Confirmar senha"
              setValue={setConfirmarSenha}
            />
          </InputArea>
        </ContainerForm>
        <Button nome="Cadastar" acao={cadastrar} />
        <Link>
          <Text style={style.texto}>Já tenho uma conta</Text>
        </Link>
      </Content>
    </Background>
  );
};

export const style = StyleSheet.create({
  texto: {
    color: colorWhite,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

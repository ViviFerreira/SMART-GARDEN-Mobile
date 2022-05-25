import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { colorPrimary } from '~/components/UI/variaveis';
import Background from '~/components/global/Background';
import Content from '~/components/global/Content';
import Logo from '~/components/global/Logo';
import ContainerForm from '~/components/global/ContainerForm';
import InputArea from '~/components/global/InputArea';
import Input from '~/components/global/Input';
import Button from '~/components/global/Button/index';
import Link from '~/components/global/Link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log(email, senha);
    navigation.navigate('Home');
  };

  return (
    <Background>
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
        <Button name="Logar" handle={handleLogin} />
        <Link to="Cadastro">Ainda não tenho uma conta</Link>
        <Link to="Recover" style={{ marginTop: 5 }}>
          Esqueci minha senha
        </Link>
      </Content>
    </Background>
  );
}

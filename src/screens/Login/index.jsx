import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { colorPrimary } from '~/components/UI/variaveis';
import Background from '~/components/auth/Background';
import Content from '~/components/auth/Content';
import Logo from '~/components/auth/Logo';
import ContainerForm from '~/components/auth/ContainerForm';
import InputArea from '~/components/auth/InputArea';
import Input from '~/components/auth/Input';
import Button from '~/components/auth/Button';
import Link from '~/components/auth/Link';

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

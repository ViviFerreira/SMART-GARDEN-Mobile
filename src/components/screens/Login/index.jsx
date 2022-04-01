import React, { useState } from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { colorPrimary, colorWhite } from '~/components/UI/variaveis';
import Background from '~/components/Usuario/Background';
import Content from '~/components/Usuario/Content';
import Logo from '~/components/Usuario/Logo';
import ContainerForm from '~/components/Usuario/ContainerForm';
import InputArea from '~/components/Usuario/InputArea';
import Input from '~/components/Usuario/Input';
import Button from '~/components/Usuario/Button';
import Link from '~/components/Usuario/Link';

export default Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = () => {
    console.log(email, senha);
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
        <Button nome="Logar" acao={logar} />
        <Link to="Cadastro">Ainda não tenho uma conta</Link>
        <Link to="Login" style={{ marginTop: 5 }}>
          Esqueci minha senha
        </Link>
      </Content>
    </Background>
  );
};

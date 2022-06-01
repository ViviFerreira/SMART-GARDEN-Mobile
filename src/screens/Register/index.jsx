import React, { useState } from 'react';
import { colorPrimary } from '~/components/UI/variaveis';
import Background from '~/components/global/Background';
import Content from '~/components/global/Content';
import Logo from '~/components/global/Logo';
import ContainerForm from '~/components/global/ContainerForm';
import InputArea from '~/components/global/InputForm/index';
import Input from '~/components/global/Input/index';
import Button from '~/components/global/Button/index';
import Link from '~/components/global/Link';
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
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
        <Button
          onPress={handleCadastro}
          style={{ marginTop: 25, borderRadius: 8 }}
        >
          Cadastro
        </Button>
        <Link to="Login">Já tenho uma conta</Link>
      </Content>
    </Background>
  );
}

import React, { useState } from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { colorPrimary } from '~/components/UI/variaveis';
import Background from '~components/auth/Background';
import Logo from '~components/auth/Logo';
import ContainerForm from '~components/auth/ContainerForm';
import InputArea from '~components/auth/InputArea';
import Input from '~components/auth/Input';
import Button from '~components/auth/Button';
import Link from '~components/auth/Link';
import { Message, Container } from './styled';
import { SafeAreaView } from 'react-native';

export function RecoverPassword() {
  return (
    <Background>
      <SafeAreaView>
        <Container>
          <Logo />
        </Container>
      </SafeAreaView>
    </Background>
  );
}

import React from 'react';

import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import Lottie from 'lottie-react-native';
import Plantas from '../../../assets/background01.jpg';
import styles from './style';
import GifGarden from '../../../assets/GifGarden.json';
import Logo from '../../../assets/LogoSG.png';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        resizeMode="cover"
        source={Plantas}
        style={{ width: '100%', height: '100%' }}
      >
        <LinearGradient colors={['#0000', '#000000']} style={{ flex: 1 }}>
          <Lottie style={styles.gif} source={GifGarden} autoPlay loop />

          <View style={styles.header}></View>

          <View style={{ flex: 1.2 }}>
            <Animatable.View
              animation="fadeInUpBig"
              delay={1000}
              style={styles.form}
            >
              <Image source={Logo} style={styles.formImage} />
              <Text style={styles.formText}>Smart Garden</Text>
              <Text style={styles.formSubText}>
                A melhor opção em cuidado com o seu jardim
              </Text>
              <Animatable.View
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={styles.formButton}
                >
                  <Icon
                    name="arrow-forward-ios"
                    style={styles.formButtonText}
                  />
                </TouchableOpacity>
              </Animatable.View>
            </Animatable.View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

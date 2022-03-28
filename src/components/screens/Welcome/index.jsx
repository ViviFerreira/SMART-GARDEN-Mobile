import React from "react";

import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "@expo/vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import Lottie from "lottie-react-native";
import Rectangle from "../../../../assets/Rectangle.png";
import styles from "./style";
import GifGarden from "../../../../assets/GifGarden.json";
import Logo from "../../../../assets/LogoSG.png";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        resizeMode="cover"
        source={Rectangle}
        style={{ width: "100%", height: "100%" }}
      >
        <Lottie style={styles.gif} source={GifGarden} autoPlay loop />

        <View style={styles.header}></View>

        <View  style={{flex:1.2}}>

        
        <Animatable.View
          animation="fadeInUpBig"
          delay={5000}
          style={styles.form}
        >
          <Image source={Logo} style={styles.formImage} />
          <Text style={styles.formText}>Smart Garden</Text>
          <Text style={styles.formSubText}>
            A melhor opção em cuidado com o seu jardim
          </Text>
          <Animatable.View
          animation="pulse"
          easing="out"
          iterationCount="infinite"
          >
            <TouchableOpacity style={styles.formButton}>
              <Icon name="arrow-forward-ios" style={styles.formButtonText} />
            </TouchableOpacity>
          </Animatable.View>
        </Animatable.View>
        </View>
      </ImageBackground>
    </View>
  );
}

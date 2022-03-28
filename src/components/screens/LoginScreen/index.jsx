import { Text, TextInput, View, ImageBackground, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from 'expo-blur';
import React from "react";
import Plantas from "../../../../assets/Plantas.jpg";
import Logo from "../../../../assets/LogoSG.png";
import styles from "./style";

export default function LoginScreen() {
  return (
    <ImageBackground
      resizeMode="cover"
      source={Plantas}
      style={{ width: "100%", height: "100%" }}
    >
      <LinearGradient colors={["#0000", "#000000"]} style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.viewLogo}>
            <Image source={Logo} style={styles.Image} />
          </View>
          <View style={styles.form}>
            {/* <BlurView
            style={styles.blurView}
              intensity={25}
              blurType="dark"
            >
              <Text style={styles.titleInput} >Tela de Login</Text>
              <TextInput style={styles.input} />
            </BlurView> */}
            
            <LinearGradient
              colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.2)']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              useAngle
              angle={110}
              style={styles.card}
            >
              <Text style={styles.titleInput} >Tela de Login</Text>
              <TextInput style={styles.input} />
              <Text style={styles.titleInput} >Tela de Login</Text>
              <TextInput style={styles.input} />
            </LinearGradient>
            
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

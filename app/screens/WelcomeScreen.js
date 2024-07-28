import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpg')}
    >
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />
            <Text>Only useless are sold, even for you. LOL</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    // my button is not visible
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'blue',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'red',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    }
})
export default WelcomeScreen;
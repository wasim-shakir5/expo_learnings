import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
  return (
    <ImageBackground 
        blurRadius={10}
        style={styles.background}
        source={require('../assets/background.jpg')}
    >
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />
            <Text style={styles.tagline}>Only useless are sold, even for you. LOL</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <AppButton title="Login" a='login tapped' onPress={() => console.log('login tapped')} />
            <AppButton title="Register" color='secondary' onPress={() => console.log('register tapped')} />
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    tagline: {
        fontSize: 25,
        fontWeight: '700',
        paddingVertical: 20,
    },
})
export default WelcomeScreen;
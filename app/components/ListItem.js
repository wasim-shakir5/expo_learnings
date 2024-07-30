import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import AppText from './AppText';
import colors from '../config/colors';

function ListItem({ title, subTitle, image}) {
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.details}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText>{subTitle}</AppText>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    }, 
    title: {
        fontWeight: '900'
    },
    subTitle: {
        color: colors.medium,
    }
})

export default ListItem;
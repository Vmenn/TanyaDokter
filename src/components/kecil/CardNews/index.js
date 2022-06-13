import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth, Colors, fonts } from '../../../utils'
const CardNews = ({ New }) => {
    return (
        <View style={styles.itemscontent}>
            <View style={styles.imagenews}>
                <Image source={New.gambar} style={styles.image} />
            </View>
            <Text style={styles.judul}>{New.judul}</Text>
        </View>
    )
}

export default CardNews

const styles = StyleSheet.create({
    itemscontent: {
        maxWidth: 190,
        marginLeft: 15,
        marginTop: 14

    },
    imagenews: {
        height: responsiveHeight(150),
        width: responsiveWidth(190),
        alignItems: 'center',

    },
    image: {
        height: responsiveHeight(150),
        width: responsiveWidth(190),
        justifyContent: 'flex-end',
        borderRadius: 8,

    },
    judul: {
        fontSize: 12,
        marginTop: 4,
        color: Colors.FontsSecond,
        fontFamily: fonts.primary.Medium
    },
    dsc: {
        fontSize: 12,
        marginTop: 2,
        color: Colors.Grey,
        fontFamily: fonts.primary.Medium,
        textAlign: 'justify'
    }
})
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth, Colors, fonts } from '../../../utils'
const CardNews = ({ New,navigation }) => {
    return (
        <View style={styles.itemscontent}>
            <TouchableOpacity onPress={()=>navigation.navigate('DetailNews',{New})} style={styles.imagenews} activeOpacity={0.7}>
                <Image source={New.gambar} style={styles.image} />
            </TouchableOpacity>
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
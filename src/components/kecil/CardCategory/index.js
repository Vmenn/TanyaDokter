import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native'
import { DokterUmum } from '../../../assets'
import { responsiveHeight, responsiveWidth, Colors } from '../../../utils'
import { fonts } from '../../../utils'

const CardCategory = ({ Cat }) => {
    return (
        <View style={styles.item}>
            <TouchableOpacity style={styles.itemcategory} activeOpacity={0.7} >
                <Image source={Cat.gambar}/>
            </TouchableOpacity>
            <Text style={styles.titlespesialis}>{Cat.nama}</Text>
        </View>
    )
}

export default CardCategory

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
    },
    itemcategory: {
        backgroundColor: Colors.White,
        width: 45,
        height: 41,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    titlespesialis: {
        fontSize: 10,
        marginTop: 6,
        fontFamily: fonts.primary.Light,
        color: Colors.Black
    },
})

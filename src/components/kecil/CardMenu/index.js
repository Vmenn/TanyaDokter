import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../../utils'
import { Dewi } from '../../../assets'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../../utils/constant'

const CardMenu = ({Profile,navigation}) => {
    return (
        <View style={styles.menuItem}>
            <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={()=>navigation.navigate(Profile.halaman)}>
                {Profile.gambar}
            </TouchableOpacity>
            <View style={styles.dsc}>
                <Text style={styles.judul}>{Profile.nama}</Text>
                <Text style={styles.cap}>{Profile.desc}</Text>
            </View>
        </View>
    )
}

export default CardMenu

const styles = StyleSheet.create({
    menuItem: {
        height: responsiveHeight(65),
        backgroundColor: Colors.White,
        marginTop: 12,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        borderRadius: 8,
        flexDirection: 'row'
    },
    item: {
        height: responsiveHeight(47),
        width: responsiveWidth(47),
        backgroundColor: Colors.primiryOpactiy,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8
    },
    dsc: {
        marginLeft: 8
    },
    judul: {
        fontFamily: fonts.primary.Medium,
        fontSize:RFValue(16,heightMobileUI),
        color: Colors.Black,
    },
    cap: {
        fontFamily: fonts.primary.Reguler,
        fontSize:RFValue(14,heightMobileUI),
        color: Colors.Grey,
    },
})
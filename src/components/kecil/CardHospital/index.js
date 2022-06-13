import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../../utils'
import { Dewi } from '../../../assets'

const CardHospital = ({ host }) => {
    return (
        <View style={styles.items}>
            <View style={styles.gambarbackorund}>
                <Image source={host.gambar} style={styles.gambar} />
            </View>
            <Text style={styles.namaklinik}>{host.nama}</Text>
            <Text style={styles.alamat}>{host.jenis}</Text>

            <View style={styles.cangkupan}>
                <Text style={styles.daerah}>{host.daerah}</Text>
                <Text style={styles.jarak}>{host.jarak}</Text>
            </View>

            <TouchableOpacity style={styles.tombol} activeOpacity={0.7} >
                <Text style={styles.pilih}>Pilih</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CardHospital

const styles = StyleSheet.create({
    items: {
        backgroundColor: Colors.White,
        width: responsiveWidth(185),
        maxWidth: responsiveWidth(185),
        borderRadius: 6,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    gambarbackorund: {
        maxWidth: responsiveWidth(185),
        maxHeight: responsiveHeight(105),
        borderRadius: 6,
    },
    gambar: {
        width: responsiveWidth(185),
        height: responsiveHeight(105),
        borderRadius: 6,
    },
    namaklinik: {
        fontSize: 12,
        fontFamily: fonts.primary.Medium,
        color: Colors.Black,
        padding: 4
    },
    alamat: {
        fontSize: 12,
        fontFamily: fonts.primary.Reguler,
        color: Colors.Grey,
        paddingHorizontal: 4,
        paddingBottom: 4
    },
    cangkupan:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 4,
        alignItems:'center'
    },
    daerah:{
        fontSize:12,
        fontFamily:fonts.primary.Reguler,
        color:Colors.Grey
    },
    jarak:{
        fontSize:12,
        fontFamily:fonts.primary.Reguler,
        color:Colors.White,
        backgroundColor:Colors.Primary,
        padding:4,
        borderRadius:6,

    },
    tombol:{
        alignItems:'center',
        backgroundColor:Colors.Primary,
        marginHorizontal:8,
        marginTop:8,
        borderRadius:4,
        height:30,
        justifyContent:'center',
        marginBottom:8
    },
    pilih:{
        fontSize:12,
        fontFamily:fonts.primary.Reguler,
        color:Colors.White,
    }
})
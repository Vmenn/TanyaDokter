import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../../utils'
import { responsiveHeight, responsiveWidth } from '../../../utils'
import { fonts } from '../../../utils'


const CardTopDokter = ({ Top,navigation, }) => {
    return (
        <TouchableOpacity style={styles.items} activeOpacity={0.7} onPress={()=>navigation.navigate('DetailDokter',{Top})}>
        <View style={styles.gambarbackround}>
            <Image source={Top.gambar} style={styles.gambar}/>
        </View>
        <Text style={styles.nama}>{Top.nama}</Text>
        <Text style={styles.spesialis}>{Top.cate.nama}</Text>
        <View style={styles.rating}>
            <Text style={styles.rate}>{Top.rate}</Text>
        </View>
    </TouchableOpacity>
    )
}

export default CardTopDokter

const styles = StyleSheet.create({
    gambar: {
        height: responsiveWidth(90),
        width: responsiveHeight(80),

    },
    items:{
        maxWidth:responsiveWidth(180),
        maxHeigh:responsiveHeight(170),
        marginBottom:12
    },
    gambarbackround:{
        backgroundColor:Colors.BackroundDokter,
        height:responsiveHeight(100),
        width:responsiveWidth(180),
        borderRadius:8,
        justifyContent: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nama:{
        fontSize: 12,
        marginTop: 8,
        color: Colors.FontsSecond,
        fontFamily: fonts.primary.Medium
    },
    spesialis:{
        fontSize: 12,
        marginTop: 2,
        color: Colors.Grey,
        fontFamily: fonts.primary.Reguler
    },
    rating:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    rate: {
            fontSize: 12,
            color: "#FF8000",
            fontFamily: fonts.primary.Reguler
        },
})
// style={styles.gambar}
import { StyleSheet, Text, View ,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { Hapus } from '../../../assets'
import Gap from '../Gap'
import { responsiveWidth,responsiveHeight,Colors,fonts,numberWithCommas } from '../../../utils'
const CardKeranjang = ({keranjang}) => {
  return (
    <View style={styles.items}>
                    <TouchableOpacity style={styles.gambarbackround} activeOpacity={0.9}>
                        <Image style={styles.gambar} source={keranjang.product.gambar}/>
                    </TouchableOpacity>
                    <View style={styles.description}>
                        <Text style={styles.judul}>{keranjang.product.nama}</Text>
                        <Text style={styles.dsc}>{keranjang.product.jenis}</Text>
                        <Gap Height={16}/>
                        <Text style={styles.harga}>Rp. {numberWithCommas(keranjang.totalHarga)}</Text>
                    </View>
                    <View style={styles.action}>
                        <TouchableOpacity style={styles.hapus} activeOpacity={0.7} >
                            <Hapus/>
                        </TouchableOpacity>
                        <View style={styles.jumlah}>
                            <Text style={styles.barang}>{keranjang.jumlahPesan}</Text>
                        </View>
                    </View>
                </View>
  )
}

export default CardKeranjang

const styles = StyleSheet.create({
  items: {
    marginHorizontal: 15,
    marginTop: 14,
    borderRadius: 8,
    flexDirection: 'row',
    height: responsiveHeight(125),
    maxHeight: responsiveHeight(125),
    backgroundColor: Colors.White,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
},
gambarbackround: {
    height: responsiveHeight(125),
    maxHeight: responsiveHeight(125),
    width: responsiveWidth(130),
    maxWidth: responsiveWidth(130),
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6
},
gambar: {
    height: responsiveHeight(125),
    maxHeight: responsiveHeight(125),
    width: responsiveWidth(130),
    maxWidth: responsiveWidth(130),
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    flex: 1,
},
description: {
    flex: 1,
    maxHeight: responsiveHeight(125),
    marginHorizontal: 10,
    marginVertical: 4,
    justifyContent:'center'
},
judul: {
    fontFamily: fonts.primary.Medium,
    fontSize: 16,
    color: Colors.Blue,

},
dsc: {
    fontFamily: fonts.primary.Reguler,
    fontSize: 14,
    color: Colors.Grey,
},
harga:{
    fontFamily: fonts.primary.Bold,
    fontSize: 14,
    color: Colors.FontsThree,
},
action:{
    marginRight:12,
    justifyContent:'space-between',
    flexDirection:'column',
    marginVertical:18,
    

},
hapus:{
    backgroundColor:Colors.BackroundHospital,
    padding:11,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30
},
jumlah:{
    backgroundColor:Colors.Secondary,
    paddingVertical:responsiveHeight(8),
    paddingHorizontal:responsiveWidth(10),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:90,
},
barang:{
    fontFamily: fonts.primary.Bold,
    fontSize: 14,
    color: Colors.White,
},
button:{
    height:responsiveHeight(75),
    backgroundColor: '#00AFC1',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
},
title:{
    fontFamily:fonts.primary.Medium,
    color:'white',
    fontSize:18
},
total:{
    flexDirection:'row',
    marginLeft:15
},
})
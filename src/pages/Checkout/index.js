import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CardAlamat, Gap, HeaderComponent } from '../../components'
import { Colors, fonts } from '../../utils'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../utils/constant'
import Pilihan from '../../components/kecil/pilihan'

export default class Checkout extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <HeaderComponent Title={Checkout}/>
            <View style={styles.alamat}>
                <View style={styles.cardalamat}>
                    <Text style={styles.alamatPengiriman}>Alamat Pengriman</Text>
                    <Text style={styles.pilihAlamat}>Pilih alamat lain</Text>
                </View>             
            </View>

        <CardAlamat/>

        <View style={styles.Belanjaan}>
            <View style={styles.CardBelanjaan}>
                <View style={styles.Subharga}>
                <Text style={styles.TextSubtotal}>Subtotal</Text>
                <Text style={styles.TextSubharga}>Rp 604004</Text>
            </View>

            <Pilihan/>
            
            <Text style={styles.Ringkasanbelanja}>Ringkasan Belanja</Text>
            <View style={styles.hargaekpedisi}>
                <Text style={styles.berat}>Berat : 14kg</Text>
                <Text style={styles.hargapengriman}>Rp 60000</Text>
            </View>
            <View style={styles.estimasi}>
                <Text style={styles.Textestimasi}>Subtotal</Text>
                <Text style={styles.hargaEstemasi}>2-3 Hari</Text>
            </View>
            </View>           
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.Gerydus,
        flex:1
    },
    alamat:{
        borderBottomWidth:1,
        borderColor:Colors.Grey,
        paddingVertical:8,
        backgroundColor:Colors.White,
    },
    cardalamat:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:15,
    },
    alamatPengiriman:{
        fontSize:14,
        fontFamily:fonts.primary.Medium,
        color:Colors.Black
    },
    pilihAlamat:{
        fontSize:14,
        fontFamily:fonts.primary.Medium,
        color:Colors.FontsThree
    },
    Subharga:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    Belanjaan:{
        marginTop:12,
        backgroundColor:Colors.White,
        flex:1
    },CardBelanjaan:{
        marginHorizontal:15,
    },
    TextSubtotal:{
        fontFamily:fonts.primary.Reguler,
        fontSize:14,
        color:Colors.Black
    },
    TextSubharga:{
        fontFamily:fonts.primary.Medium,
        fontSize:14,
        color:Colors.FontsThree
    },
    Ringkasanbelanja:{
        fontFamily:fonts.primary.Medium,
        fontSize:14,
        color:Colors.Black,
        marginTop:12
    },
    hargaekpedisi:{
        marginTop:12,
        flexDirection:'row',
        justifyContent:"space-between"
    },
    estimasi:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    berat:{
        fontFamily:fonts.primary.Reguler,
        fontSize:14,
        color:Colors.Black
    },
    hargapengriman:{
        fontFamily:fonts.primary.Medium,
        fontSize:14,
        color:Colors.FontsThree
    },
    Textestimasi:{
        fontFamily:fonts.primary.Reguler,
        fontSize:14,
        color:Colors.Black
    },
    hargaEstemasi:{
        fontFamily:fonts.primary.Medium,
        fontSize:14,
        color:Colors.FontsThree
    }
})
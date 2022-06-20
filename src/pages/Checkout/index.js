import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CardAlamat, Gap, HeaderComponent } from '../../components'
import { Colors, fonts, numberWithCommas, responsiveHeight } from '../../utils'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../utils/constant'
import Pilihan from '../../components/kecil/pilihan'
import { DummyPesanan, DummyProfile } from '../../data'
import { Paymaster } from '../../assets'

export default class Checkout extends Component {

    constructor(props) {
        super(props)

        this.state = {
            profile: DummyProfile,
            Pesanan : DummyPesanan[0],
            Ekpredisi: [],
        }
    }

    render() {
        const { profile,Pesanan,Ekpredisi } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <HeaderComponent Title="Checkout" onPress={()=>this.props.navigation.goBack()} />
                
                <CardAlamat profile={profile} />

                <View style={styles.Belanjaan}>
                    <View style={styles.CardBelanjaan}>
                        <View style={styles.Subharga}>
                            <Text style={styles.TextSubtotal}>Subtotal</Text>
                            <Text style={styles.TextSubharga}>Rp {numberWithCommas(Pesanan.totalHarga)}</Text>
                        </View>

                        <Pilihan datas={Ekpredisi} />

                        <Text style={styles.Ringkasanbelanja}>Ringkasan Belanja</Text>
                        <View style={styles.hargaekpedisi}>
                            <Text style={styles.berat}>Berat : 14kg</Text>
                            <Text style={styles.hargapengriman}>Rp {numberWithCommas(12000)}</Text>
                        </View>
                        <View style={styles.estimasi}>
                            <Text style={styles.Textestimasi}>Subtotal</Text>
                            <Text style={styles.hargaEstemasi}>2-3 Hari</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.button} activeOpacity={0.7}>
                <View style={styles.total}>
                        <Text style={styles.actiontotal}>Total</Text>
                        <Text style={styles.actionjumlah}>Rp {numberWithCommas(Pesanan.totalHarga+15000)}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} style={styles.pay} onPress={()=>this.props.navigation.naviget()}>
                        <Paymaster/>
                        <Text style={styles.check}>Kirim Pesanan</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Gerydus,
        flex: 1
    },
    Subharga: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Belanjaan: {
        marginTop: 12,
        backgroundColor: Colors.White,
        flex: 1
    }, CardBelanjaan: {
        marginHorizontal: 15,
        marginTop: 8,
    },
    TextSubtotal: {
        fontFamily: fonts.primary.Reguler,
        fontSize: 14,
        color: Colors.Black
    },
    TextSubharga: {
        fontFamily: fonts.primary.Medium,
        fontSize: 14,
        color: Colors.FontsThree
    },
    Ringkasanbelanja: {
        fontFamily: fonts.primary.Medium,
        fontSize: 14,
        color: Colors.Black,
        marginTop: 12
    },
    hargaekpedisi: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    estimasi: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    berat: {
        fontFamily: fonts.primary.Reguler,
        fontSize: 14,
        color: Colors.Black
    },
    hargapengriman: {
        fontFamily: fonts.primary.Medium,
        fontSize: 14,
        color: Colors.FontsThree
    },
    Textestimasi: {
        fontFamily: fonts.primary.Reguler,
        fontSize: 14,
        color: Colors.Black
    },
    hargaEstemasi: {
        fontFamily: fonts.primary.Medium,
        fontSize: 14,
        color: Colors.FontsThree
    },
    button:{
        height:responsiveHeight(75),
        backgroundColor: '#00AFC1',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    pay:{
        alignItems:'center',
        marginRight:15
    },
    total:{
        marginLeft:15
    },
    actiontotal:{
        fontFamily:fonts.primary.Medium,
        fontSize:14,
        color:Colors.White,
        marginRight:4
    },
    actionjumlah:{
        fontFamily:fonts.primary.Medium,
        fontSize:14,
        color:Colors.FontsThree
    },
    check:{
        fontFamily:fonts.primary.Medium,
        fontSize:14,
        color:Colors.White,
    }
})
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { Hapus, Paymaster } from '../../assets';
import { Button, Gap, HeaderComponent, ListKeranjang } from '../../components';
import { DummyObat, DummyPesanan } from '../../data';
import {
    Colors,
    fonts,
    numberWithCommas,
    responsiveHeight,
    responsiveWidth
} from '../../utils';

class Keranjang extends Component {
    goBack = () => {
        this.props.navigation.goBack();
    };
    Checkout = ()=>{
        this.props.navigation.navigate('Checkout')
    }
    constructor(props) {
        super(props)

        this.state = {
            pesanan:DummyPesanan[0]
        }
    }
    render() {
        const {pesanan}=this.state
        return (
            <View style={styles.page}>
                <HeaderComponent Title="Keranjang" onPress={this.goBack} />
                <ScrollView showsVerticalScrollIndicator={false}>
                <ListKeranjang keranjangs={pesanan.pesanans} />
                </ScrollView>
                <View style={styles.button} activeOpacity={0.7}>
                <View style={styles.total}>
                        <Text style={styles.actiontotal}>Total</Text>
                        <Text style={styles.actionjumlah}>Rp {numberWithCommas(pesanan.totalHarga)}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} style={styles.pay} onPress={this.Checkout}>
                        <Paymaster/>
                        <Text style={styles.check}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Keranjang;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: Colors.White,
        justifyContent:'space-between'
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
});

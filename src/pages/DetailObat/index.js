import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from 'react-native';
import { Button, Gap, HeaderComponent, Inputan } from '../../components';
import {Colors, fonts, responsiveHeight, responsiveWidth,} from '../../utils';

export default class DetailObat extends Component {
    goBack = () => {
        this.props.navigation.goBack();
    };
    constructor(props) {
        super(props)

        this.state = {
        Obat:this.props.route.params.Obat,
        images:this.props.route.params.Obat.gambar
        }
    }
    render() {
        const {Obat,images} = this.state
        // console.log("Parameter:",this.props.route.params);
        return (
            <View style={styles.page}>
            <HeaderComponent Title="ObatDetail" onPress={()=>this.goBack()}/>
            <ScrollView>
                <View style={styles.covergambar}>
                    <Image source={Obat.gambar} style={styles.gambar}/>
                </View>
            <View style={styles.detail}>
                <Gap Height={24} />
                <View style={styles.desc}>
                    <Text style={styles.judul}>{Obat.nama}</Text>
                    <View>
                        <Text style={styles.title}>Desc</Text>
                        <Text style={styles.description}>{Obat.Deskripsi}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Dosis</Text>
                        <Text style={styles.dosis}>{Obat.Dosis}</Text>
                    </View>
                    <View style={styles.inputan}>
                    <Inputan  width={166} height={35} label="Jumlah"/>
                        {/* <View>
                        <Text style={styles.title}>Jumlah</Text>
                        <Inputan  width={166} height={35}/>
                        </View> */}
                        <Text style={styles.harga}>Harga: <Text style={styles.Rupiah}>{Obat.harga}</Text></Text>
                    </View>
                </View>
                
            </View>
            <Gap Height={12}/>
            <View style={styles.button}>
                <Button type="Secondary" Title="Masuk Keranjang" />
            </View>
            <Gap Height={12}/>
            </ScrollView>
        </View>
        
        )
    }
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    covergambar:{
        maxHeight:responsiveHeight(277),
        maxWidth:responsiveWidth(428),
        backgroundColor: Colors.Primary,
    },
gambar:{
    height:responsiveHeight(277),
    width:responsiveWidth(428)
},
    detail: {
        backgroundColor: Colors.White,
    },
    desc:{
        marginHorizontal:15
    },
    judul:{
        fontFamily:fonts.primary.Medium,
        color:Colors.Black,
        fontSize:18
    },
    title:{
        fontFamily:fonts.primary.Medium,
        color:Colors.Black,
        fontSize:16,
        marginTop:4
    },
    description:{
        fontFamily:fonts.primary.Reguler,
        color:Colors.Grey,
        fontSize:14,
        textAlign:'justify',
        marginTop:4
    },
    dosis:{
        fontFamily:fonts.primary.Reguler,
        color:Colors.Grey,
        fontSize:14,
        textAlign:'justify',
        // marginTop:4
    },
    harga:{
        fontFamily:fonts.primary.Medium,
        color:Colors.Black,
        fontSize:16,
        // marginTop:8
    },
    Rupiah:{
        fontFamily:fonts.primary.Medium,
        color:Colors.FontsThree,
        fontSize:16
    },
    inputan:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:12,
        alignItems:'center'
    },
    button:{
        marginHorizontal:15,
        backgroundColor: Colors.White,
    }
});

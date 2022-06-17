import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import { HeaderComponent } from '../../components'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'
import { IconKerCil } from '../../assets'

export default class History extends Component {
    render() {
        return (
            <View style={styles.pages}>
                <HeaderComponent Title="History" onPress={() => this.props.navigation.goBack()} />
                <ScrollView>
                    <View style={styles.product}>
                        <View style={styles.ShopTime}>
                            <IconKerCil/>
                            <Text style={styles.belanja}>Belanja</Text>
                            <Text style={styles.date}>Minggu 31 Mei 2022</Text>
                            <View style={styles.kondisi}>
                                <Text style={styles.status}>Prosess</Text>
                            </View>
                        </View>

                        <View style={styles.items}>
                            <View style={styles.backroundImage}>
                                <Image source={require('../../assets/image/cairan.png')} style={styles.gambar}/>
                            </View>
                            <View style={styles.informationOrder}>
                            <View style={styles.productInformation}>
                                <Text>Nama product</Text>
                                <Text>Nama product</Text>
                            </View>
                            <View style={styles.productOrder}>
                                <Text>Nama product</Text>
                                <Text>Nama product</Text>
                            </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1
    },
    product: {
        marginTop: 24,
        marginHorizontal:15,
    },
    ShopTime: {
        flexDirection: "row",
        alignItems: 'center',
        width:responsiveWidth(300),
        justifyContent:'space-between'
    },
    kondisi: {
        padding: 4,
        backgroundColor: Colors.BackroundHospital,
        borderRadius: 4
    },
    belanja:{
        fontFamily:fonts.primary.Medium,
        fontSize:14,
        color:Colors.Black,
    },
    date:{
        fontFamily:fonts.primary.Reguler,
        fontSize:12,
        color:Colors.Black,
    },
    status:{
        fontFamily:fonts.primary.Medium,
        fontSize:14,
        color:Colors.FontsThree,
    },
    backroundImage:{
        maxHeight:responsiveHeight(70),
        maxWidth:responsiveWidth(70)
    },
    gambar:{
        height:responsiveHeight(70),
        width:responsiveWidth(70),
        borderRadius:6
    },
    items:{
        flexDirection:'row'
    },
    informationOrder:{
        flexDirection:'row'
    },
})
import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../../utils'
import React from 'react'
import { IconKerCil } from '../../../assets'

const CardHistory = ({ Pesanan }) => {
    return (
        <View style={styles.product}>
            <View style={styles.ShopTime}>
                <IconKerCil />
                <Text style={styles.belanja}>Belanja</Text>
                <Text style={styles.date}>{Pesanan.tanggalPemesanan}</Text>
                <View style={styles.kondisi}>
                    <Text style={styles.status}>{Pesanan.status}</Text>
                </View>
            </View>

            <View style={styles.items}>
                {Pesanan.pesanans.map((items) => {
                    return (
                        <View key={items.id} style={styles.history}>
                            <View style={styles.backroundImage}>
                                <Image style={styles.foto} source={items.product.gambar} />
                            </View>
                            <View style={styles.informationOrder}>
                                <View style={styles.productInformation}>
                                    <Text style={styles.harga}>{items.product.nama}</Text>
                                    <Text style={styles.title}>{items.jumlahPesan} Barang x Rp {items.product.harga}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
                <View style={styles.productOrder}>
                    <View style={styles.productEkpedisi}>
                        <Text style={styles.title}>Ongkir(2-3 Hari)</Text>
                        <Text style={styles.harga}>Rp 200,000</Text>
                    </View>
                    <View style={styles.productTotal}>
                        <Text style={styles.title}>Total Belanja</Text>
                        <Text style={styles.harga}>Rp 400,000t</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CardHistory

const styles = StyleSheet.create({
    product: {
        marginTop: 24,
        marginHorizontal: 15,
        marginBottom:12

    },
    ShopTime: {
        flexDirection: "row",
        alignItems: 'center',
        width: responsiveWidth(310),
        justifyContent: 'space-between'
    },
    kondisi: {
        padding: 4,
        backgroundColor: Colors.BackroundHospital,
        borderRadius: 4
    },
    belanja: {
        fontFamily: fonts.primary.Medium,
        fontSize: 14,
        color: Colors.Black,
    },
    date: {
        fontFamily: fonts.primary.Reguler,
        fontSize: 12,
        color: Colors.Black,
    },
    status: {
        fontFamily: fonts.primary.Medium,
        fontSize: 14,
        color: Colors.FontsThree,
    },
    backroundImage: {
        maxHeight: responsiveHeight(70),
        maxWidth: responsiveWidth(70),
        marginTop:12
    },
    foto: {
        height: responsiveHeight(70),
        width: responsiveWidth(70),
        borderRadius: 6
    },
    history: {
        flexDirection: "row"
    },
    informationOrder: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        marginLeft:12,
        marginTop:12
    },
    productOrder:{
        flexDirection: "row",
        marginTop:12
    },
    productEkpedisi:{
        marginRight:14
    },
    title:{
        fontFamily: fonts.primary.Reguler,
        fontSize: 12,
        color: Colors.Black,
    },
    harga:{
        fontFamily: fonts.primary.Medium,
        fontSize: 14,
        color: Colors.Black,
    }
})
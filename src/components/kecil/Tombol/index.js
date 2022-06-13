import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../../utils'
import { Keranjang } from '../../../assets'
const Tombol = ({ icon, TotalKeranjang, navigation }) => {

    const Icon = () => {
        if (icon === "Keranjang") {
            return <Keranjang />
        }
        return <Keranjang />
    }
    return (
        <TouchableOpacity style={styles.keranjang} activeOpacity={0.9} onPress={() => navigation.navigate('Keranjang')}>
            <Keranjang />
            {TotalKeranjang && (
                <View style={styles.notif}>
                    <Text style={styles.Textnotif}>
                        {TotalKeranjang}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default Tombol

const styles = StyleSheet.create({
    keranjang: {
        backgroundColor: Colors.Primary,
        marginRight: 15,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(50),
        width: responsiveWidth(50),
    },
    notif: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 3
    },
    Textnotif: {
        fontFamily: fonts.primary.Bold,
        fontSize: 8,
        color: Colors.White
    }
})
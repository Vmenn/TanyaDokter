import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { HeaderComponent } from '../../components'
import { Colors } from '../../utils'

export default class History extends Component {
    render() {
        return (
            <View style={styles.pages}>
                <HeaderComponent Title="History" onPress={() => this.props.navigation.goBack()} />
                <ScrollView>
                    <View style={styles.product}>
                        <View style={styles.ShopTime}>
                            <Text>Belanja</Text>
                            <Text>Belanja</Text>
                            <View style={styles.kondisi}>
                                <Text>Prosess</Text>
                            </View>
                        </View>

                        <View style={styles.items}>

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
        marginHorizontal:15
    },
    ShopTime: {
        flexDirection: "row",
        alignItems: 'center'
    },
    kondisi: {
        padding: 4,
        backgroundColor: Colors.BackroundHospital,
        borderRadius: 4
    }
})
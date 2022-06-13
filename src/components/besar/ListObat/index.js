import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CardObat from '../../kecil/CardObat'

const ListObat = ({ Obats,navigation }) => {
    return (
        <View style={styles.container}>
            {Obats.map((Obat) => {
                return (
                    <CardObat Obat={Obat} key={Obat.id} navigation={navigation}/>
                )
            })}
        </View>
    )
}

export default ListObat

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:Colors.Black,
        flexWrap: 'wrap',
        marginHorizontal: 15
    },
})
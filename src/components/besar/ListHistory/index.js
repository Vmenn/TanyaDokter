import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardHistory } from '../../kecil'

const ListHistory = ({Pesanans}) => {
    return (
        <View >
            {Pesanans.map((Pesanan) => {
                return (
                    <CardHistory Pesanan={Pesanan} key={Pesanan.id}/>
                )
            })}
        </View>
    )
}

export default ListHistory

const styles = StyleSheet.create({})
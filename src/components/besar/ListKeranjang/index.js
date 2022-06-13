import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardKeranjang } from '../../kecil'

const ListKeranjang = ({keranjangs}) => {
  return (
    <View >
            {keranjangs.map((keranjang) => {
                return (
                    <CardKeranjang keranjang={keranjang} key={keranjang.id}/>
                )
            })}
        </View>
  )
}

export default ListKeranjang

const styles = StyleSheet.create({})
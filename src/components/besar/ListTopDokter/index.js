import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors, fonts } from '../../../utils'
import { responsiveWidth, responsiveHeight } from '../../../utils'
import { CardTopDokter } from '../../kecil'
import { Chat, ChatDokter, Dokter3 } from '../../../assets'

const ListTopDokter = ({ TopDokter }) => {
    return (
        <View style={styles.container}>
            {TopDokter.map((Top) => {
                return (
                    <CardTopDokter Top={Top} key={Top.id}/>
                )
            })}
        </View>

    )
}

export default ListTopDokter

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
    },
})
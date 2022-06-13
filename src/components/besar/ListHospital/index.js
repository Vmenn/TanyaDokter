import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../../utils'
import { Dewi } from '../../../assets'
import CardHospital from '../../kecil/CardHospital'

const ListHospital = ({ Hosptials }) => {
    return (
        <View style={styles.container}>
            {Hosptials.map((host) => {
                return (
                    <CardHospital host={host} key={host.id}/>
                )
            })}
        </View>
    )
}

export default ListHospital

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:Colors.Black,
        flexWrap: 'wrap',
        marginHorizontal: 15
    },
})
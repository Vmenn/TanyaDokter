import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { DokterUmum } from '../../../assets'
import { Colors,fonts } from '../../../utils'
import { CardCategory } from '../../kecil'

const ListCategory = ({Categorys}) => {
    return (
        <View style={styles.category} >
            {Categorys.map((Cat) => {
                return(
                    <CardCategory Cat={Cat} key={Cat.id}/>
                )
            })}
            
        </View>
    )
}

export default ListCategory

const styles = StyleSheet.create({
    category: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 14,
        marginHorizontal: 15
    },
    
})
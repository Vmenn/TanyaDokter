import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, fonts, responsiveHeight } from '../../../utils'

const Button = ({Title,onPress,type}) => {
  return (
    <TouchableOpacity style={styles.button(type)} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.title(type)}>{Title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:(type)=>({
        height:responsiveHeight(55),
        backgroundColor: type === 'Secondary' ? '#00AFC1': 'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:26
    }),
    title:(type)=>({
        fontFamily:fonts.primary.Medium,
        color:type === 'Secondary' ? 'white' : '#00AFC1',
        fontSize:18
    })
})
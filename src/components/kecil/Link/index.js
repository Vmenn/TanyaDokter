import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, fonts } from '../../../utils'

const Link = ({title,links,onPress,posisi}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.url}>
        <Text style={styles.title}>{title} <Text style={styles.links}>{links}</Text></Text>
        </TouchableOpacity>
    </View>
  )
}

export default Link

const styles = StyleSheet.create({
  title:
    {
    fontFamily:fonts.primary.Reguler,
    fontSize:14,
    color:'white',
  },
  url: {
    alignItems:'center'
  },
  links:{
    fontFamily:fonts.primary.Medium,
    fontSize:14,
    color:Colors.Blue
  }
})
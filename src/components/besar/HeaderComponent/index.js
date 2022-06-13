import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors, fonts, responsiveHeight } from '../../../utils'
import { ArrowWhite, ChatDokter, DokterAnak, DokterUmum } from '../../../assets'

const HeaderComponent = ({Title,onPress}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <ArrowWhite style={styles.arah} />
      </TouchableOpacity>
        <Text style={styles.title}>{Title}</Text>
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
  container:{
    height:responsiveHeight(75),
    backgroundColor:Colors.Primary,
    flexDirection:'row',
    alignItems:'center',
  },
  title:{
    marginLeft:12,
    color:Colors.White,
    fontFamily:fonts.primary.Medium,
    fontSize:16
  },
  arah:{
        marginLeft:15
  }
})
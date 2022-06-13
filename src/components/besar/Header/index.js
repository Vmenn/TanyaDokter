import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Gap } from '../../kecil'
import { IconProfile } from '../../../assets'
import { Colors, fonts } from '../../../utils'

const Header = ({navigation}) => {
  return (
    <View style={styles.profile}>
    <View style={styles.profileuser}>
        <Text style={styles.title} >Selamat Datang</Text>
        <Gap Height={15} />
        <Text style={styles.nama}>Muhamad Firmansyah</Text>
    </View>
    <TouchableOpacity style={styles.photoprofile} activeOpacity={0.7} onPress={navigation}>
        <IconProfile />
    </TouchableOpacity>
</View>
  )
}

export default Header

const styles = StyleSheet.create({
    profile: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 15,
        paddingVertical:6
        // backgroundColor:Colors.Black
    },
    profileuser:{
        justifyContent:'center'
    },
    photoprofile:{
        backgroundColor:Colors.White,
        width:55,
        height:55,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        borderColor:Colors.White,
        borderWidth:1
    },
    title:{
        fontSize:16,
        color:Colors.White,
        fontFamily:fonts.primary.Reguler
    },
    nama:{
        fontSize:18,
        color:Colors.White,
        fontFamily:fonts.primary.Medium
    }
})
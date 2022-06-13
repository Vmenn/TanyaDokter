import { StyleSheet, Text, View ,SafeAreaView,TextInput} from 'react-native'
import React from 'react'
import { Colors, fonts } from '../../../utils'

const Input = ({place,aktif,textarea}) => {
  if (textarea){
    return(
      <SafeAreaView style={styles.container}>
        <TextInput style={styles.input} placeholder={place} placeholderTextColor={'white'} blurOnSubmit={aktif}/>
    </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
        <TextInput style={styles.input} placeholder={place} placeholderTextColor={'white'} blurOnSubmit={aktif}/>
    </SafeAreaView>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:2,
        borderColor:Colors.White,
    }
})
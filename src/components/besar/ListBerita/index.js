import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardBerita } from '../../kecil'

const ListBerita = ({News,navigation}) => {
  return (
      <View>
        {News.map((New) =>{
                return(
                    <CardBerita New={New} key={New.id} navigation={navigation}/>
                )
            })}
      </View>
  )
}

export default ListBerita

const styles = StyleSheet.create({})
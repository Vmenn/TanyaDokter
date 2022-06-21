import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../../utils'

const CardCategoryDokter = ({Cat}) => {
  return (
    <View style={styles.pages}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Text>{Cat.nama}</Text> */}
      {Cat.dokters.map((items) => {
                    return (
                        <View key={items.id} style={styles.dokters}>
                          <TouchableOpacity activeOpacity={0.7} style={styles.backroundgambar}>
                            <Image source={items.dokter.gambar} style={styles.gambar}/>
                          </TouchableOpacity>
                          <View style={styles.dsc}>
                            <Text style={styles.nama}>{items.dokter.nama}</Text>
                            <Text style={styles.cate}>{Cat.nama}</Text>
                          </View>
                        </View>
                    )
                })}
      </ScrollView>
    </View>
  )
}

export default CardCategoryDokter

const styles = StyleSheet.create({
  dokters:{
    marginVertical:14,
    marginHorizontal:15,
    flexDirection:'row',
    alignItems:'center'
    },
    backroundgambar:{
      maxHeight:responsiveHeight(80),
      maxWidth:responsiveWidth(80),
      borderRadius:40,
      backgroundColor:Colors.BackroundDokter,
      marginRight:6,
    },
    gambar:{
      height:responsiveHeight(80),
      width:responsiveWidth(80),
      borderRadius:40,
      justifyContent:'center',
      alignItems:'center'
    },
    nama:{
      fontFamily:fonts.primary.Medium,
      fontSize:14,
      color:'black',

    },
    cate:{
      fontFamily:fonts.primary.Reguler,
      fontSize:14,
      color:Colors.Grey,
    }
})
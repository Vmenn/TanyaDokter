import { StyleSheet, Text, View, Image,ScrollView, SafeAreaView ,TouchableOpacity} from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth, Colors, fonts } from '../../../utils'
import { TimeUpload,Share } from '../../../assets'
const CardBerita = ({New,navigation}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.items} onPress={()=>navigation.navigate('DetailNews',{New})}>
    <View style={styles.gambarbackround}>
      <Image source={New.gambar} style={styles.gambar} />
    </View>
  <View style={styles.description}>
    <Text style={styles.judul}>{New.judul}</Text>
    <Text style={styles.dsc}>{New.dsc}</Text>
    <View style={styles.timeupload}>
      <View style={styles.time}>
        <TimeUpload />
        <Text style={styles.waktu}>24 Menit</Text>
      </View>
      <TouchableOpacity activeOpacity={0.5}>
      <Share/>
      </TouchableOpacity>
  </View>
  </View>
  </TouchableOpacity>
  )
}

export default CardBerita

const styles = StyleSheet.create({
  items:{
    marginHorizontal:15,
    marginTop:14,
    borderRadius:8,
    flexDirection:'row',
    height:responsiveHeight(125),
    maxHeight:responsiveHeight(125),
    backgroundColor: Colors.White,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
  },
  gambarbackround:{
    height:responsiveHeight(130),
    maxHeight:responsiveHeight(130),
    width:responsiveWidth(130),
    maxWidth:responsiveWidth(130),
    borderTopLeftRadius:6,
    borderBottomLeftRadius:6
  },
  gambar:{
    height:responsiveHeight(130),
    maxHeight:responsiveHeight(130),
    width:responsiveWidth(130),
    maxWidth:responsiveWidth(130),
    borderTopLeftRadius:6,
    borderBottomLeftRadius:6,
    flex:1,
  },
  description:{
    // backgroundColor:Colors.FontsSecond,
    flex:1,
    height:responsiveHeight(130),
    maxHeight:responsiveHeight(130),
    marginHorizontal:10,
    marginVertical:4
  },
  timeupload:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    flex:1,
    borderTopWidth:0.5,
    marginBottom:12,
    marginTop:8

  },
  time:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:Colors.Primary,
    padding:4,
    borderRadius:3
  },
  waktu:{
    marginLeft:6,
    color:Colors.White,
    fontFamily:fonts.primary.Reguler,
    fontSize:12
  },
  judul: {
    fontSize: 12,
    marginTop: 4,
    color: Colors.FontsSecond,
    fontFamily: fonts.primary.Medium
},
dsc:{
  fontSize: 12,
    marginTop:2,
    color: Colors.Grey,
    fontFamily: fonts.primary.Reguler
}
})
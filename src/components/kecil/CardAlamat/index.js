import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors,fonts } from '../../../utils'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../../utils/constant'
import Gap from '../Gap'
const CardAlamat = () => {
  return (
    <View style={styles.information}>
      <View style={styles.cardalamat}>
        <Gap Height={6} />
      <Text style={styles.textAlamat}>jln barokah no 86 desa wanaherang gn putri bogor rt 03 11 </Text>
      <Text style={styles.namaHp}>Muhamad Firmansyah (081510828843)</Text>
      <Text style={styles.AlamatLengkap}>Jalan barokah no 08 desa wanaherang kec gunung putri desa parungdengdek rt 03/11 kode pos 16965 bogor gang rumah di depan sekolahan generasi mandiri (GM) Gunung Putri, Kab. Bogor Jawa Barat, 16965
        Gunung Putri, Kab. Bogor, 16960</Text>
      </View>
      
    </View>
  )
}

export default CardAlamat

const styles = StyleSheet.create({
  information:{
    backgroundColor:Colors.White,
    // marginHorizontal:15,
    
},cardalamat:{
  marginHorizontal:15,
  paddingBottom:8
},
textAlamat:{
  fontSize:RFValue(16,heightMobileUI),
  fontFamily:fonts.primary.Medium,
  color:Colors.Black,
},
namaHp:{
  fontSize:12,
  fontFamily:fonts.primary.Reguler,
  color:Colors.Grey,
  marginTop:4
},
AlamatLengkap:{
  fontSize:12,
  fontFamily:fonts.primary.Reguler,
  color:Colors.Grey,
  textAlign:'justify',
  marginTop:6,
  lineHeight:14
},
})
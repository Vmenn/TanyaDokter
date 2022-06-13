import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderComponent } from '../../components'
import { DokterAnak, DokterGigi, IconAnak, IconChat, IconGigi, IconLocation, IconMata, IconPhone, IconProfile, IconTime } from '../../assets'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'
import { Caption } from 'react-native-paper'

const DetailDokter = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent Title='DetailDokter' />
      <View style={styles.detail}>
        <View style={styles.profileImage}>
          <Image source={require('../../assets/image/Dokter1.png')} style={styles.image} />
        </View>
        <View style={styles.profileName}>
          <Text style={styles.nameDokter}>Drs.Muhamad Firmansyah</Text>
          <Text style={styles.spesialis}>Dokter Anak</Text>

          <View style={styles.Action}>
            <TouchableOpacity activeOpacity={0.7} style={styles.backgroundIcon}>
              <IconAnak />
            </TouchableOpacity>
            <TouchableOpacity  activeOpacity={0.7} style={styles.backgroundIcon}>
              <IconChat />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.backgroundIcon}>
              <IconPhone />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.dsc}>
        <Text style={styles.about}>About</Text>
        <Caption style={styles.cap}>
        Lörem ipsum larar fadeplade diregt hang. Häs makrobel fast krislåda, sohyrtad. Operaism pasm smygöppna. Podat nehet att airbaghjälm och tristik. Prenat sogon, tyr men nitöliga. 
        </Caption>
      </View>

    <View style={styles.locationPraktik}>

      <View style={styles.location}>
        <IconLocation style={styles.Icon}/>
        <View style={styles.caption}>
          <Text style={styles.title}>Klinik Permata</Text>
        <Caption style={styles.alamatJadwal}>
        Ruko Permata Cibubur Blok.D-4 No.1, Jalan Cileungsi-Jonggol, Cileungsi Kidul, Kec. Cileungsi, Kabupaten Bogor, Jawa Barat 16820
        </Caption>
        </View>
      </View>

      <View style={styles.praktik}>
        <IconTime style={styles.Icon}/>
        <View style={styles.caption}>
        <Text style={styles.title}>Daily Praktik</Text>
        <Caption style={styles.alamatJadwal}>
        Senin-Jumat
        </Caption>
        <Caption style={styles.alamatJadwal}>
          10:00-03:30
        </Caption>
        </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default DetailDokter

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  detail: {
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 24
  },
  profileImage: {
    height: responsiveHeight(177),
    width: responsiveWidth(140),
    backgroundColor: Colors.Primary,
    borderRadius: 8
  },
  image: {
    height: responsiveHeight(177),
    width: responsiveWidth(140),
    alignItems: 'center',
  },
  profileName: {
    marginLeft: 10,
    width:responsiveWidth(240),
    justifyContent:'center'
  },
  nameDokter:{
    fontFamily:fonts.primary.Medium,
    color:Colors.Black,
    fontSize:22
  },
  spesialis:{
    fontFamily:fonts.primary.Light,
    color:Colors.Grey,
    fontSize:14,
    marginTop:4
  },
  Action:{
    flexDirection:'row',
    marginTop:36,

  },
  backgroundIcon:{
    marginRight:18,
    backgroundColor:Colors.Primary,
    justifyContent:'center',
    alignItems:'center',
    width:responsiveWidth(46),
    height:responsiveHeight(46),
    borderRadius:10
  },
  dsc:{
    marginHorizontal: 15,
    marginTop: 24
  },
  about:{
    fontFamily:fonts.primary.Medium,
    color:Colors.Black,
    fontSize:18,
  },
  cap:{
    fontFamily:fonts.primary.Reguler,
    color:Colors.FontsSecond,
    fontSize:14,
    marginTop:6,
    textAlign:'justify'
  },
  locationPraktik:{
    marginHorizontal: 15,
    marginTop: 24,
  },
  location:{
    flexDirection:'row',
    alignItems:'center',
  },
  praktik:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:20
  },
  caption:{
    marginLeft:12,
    maxWidth:responsiveWidth(155),
  },
  alamatJadwal:{
  fontFamily:fonts.primary.Reguler,
  fontSize:10,
  color:Colors.Grey,
  lineHeight:11,
  textAlign:'justify',
  marginTop:4
  },
title:{
  fontFamily:fonts.primary.Medium,
  fontSize:14,
  color:Colors.FontsSecond,
}
})
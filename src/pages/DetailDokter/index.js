import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderComponent } from '../../components'
import { DokterAnak, DokterGigi, IconAnak, IconChat, IconGigi, IconLocation, IconMata, IconPhone, IconProfile, IconTime } from '../../assets'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'
import { Caption } from 'react-native-paper'
import React, { Component } from 'react'

export default class DetailDokter extends Component {constructor(props) {
  super(props)

  this.state = {
  Top:this.props.route.params.Top,
  images:this.props.route.params.Top.gambar
  }
}
render() {
  const {Top,images} = this.state
    return (
      <SafeAreaView style={styles.container}>
      <HeaderComponent Title='DetailDokter' onPress={()=>this.props.navigation.goBack()}/>
      <View style={styles.detail}>
        <View style={styles.profileImage}>
          <Image source={Top.gambar} style={styles.image} />
        </View>
        <View style={styles.profileName}>
          <Text style={styles.nameDokter}>{Top.nama}</Text>
          <Text style={styles.spesialis}>{Top.cate.nama}</Text>

          <View style={styles.Action}>
            <TouchableOpacity activeOpacity={0.7} style={styles.backgroundIcon}>
              <Image source={Top.cate.gambar}/>
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
        {Top.about}
        </Caption>
      </View>

    <View style={styles.locationPraktik}>

      <View style={styles.location}>
        <IconLocation style={styles.Icon}/>
        <View style={styles.caption}>
          <Text style={styles.title}>{Top.klinik.nama}</Text>
        <Caption style={styles.alamatJadwal}>
        {Top.klinik.alamat}
        </Caption>
        </View>
      </View>

      <View style={styles.praktik}>
        <IconTime style={styles.Icon}/>
        <View style={styles.caption}>
        <Text style={styles.title}>Daily Praktik</Text>
        <Caption style={styles.alamatJadwal}>
        {Top.dialy}
        </Caption>
        <Caption style={styles.alamatJadwal}>
        {Top.jam}
        </Caption>
        </View>
      </View>
    </View>
    </SafeAreaView>
    )
  }
}


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
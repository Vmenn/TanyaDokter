import { Text, StyleSheet, View, ScrollView,Image } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderComponent } from '../../components'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'

export default class DetailNews extends Component {
    constructor(props) {
        super(props)

        this.state = {
        New:this.props.route.params.New,
        images:this.props.route.params.New.gambar
        }
    }
  render() {
    const {New,images} = this.state
    return (
      <SafeAreaView style={styles.pages}>
        <HeaderComponent Title="Detail News" onPress={()=>this.props.navigation.goBack()}/>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.backroundgambar}>
                <Image style={styles.gambar} source={New.gambar}/>
            </View>
            <View style={styles.desc}>
                <Text style={styles.title}>
                    {New.judul}
                </Text>
                <Text style={styles.isiBerita}>
                    {New.dsc}
                </Text>
            </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  pages:{
    flex:1
  },
  backroundgambar:{
    maxWidth:responsiveWidth(428),
    maxHeight:responsiveHeight(300),
  },
  gambar:{
    width:responsiveWidth(428),
    height:responsiveHeight(300),

  },
  desc:{
    marginHorizontal:15,

  },
  title:{
    textAlign:'justify',
    marginTop:12,
    fontFamily:fonts.primary.Medium,
    fontSize:14,
    color:Colors.Black
  },
  isiBerita:{
    textAlign:'justify',
    marginTop:12,
    fontFamily:fonts.primary.Reguler,
    fontSize:14,
    color:Colors.Grey
  }
})
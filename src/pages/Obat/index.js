import { Text, StyleSheet, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Keranjang, Search } from '../../assets'
import { Colors, responsiveWidth } from '../../utils'
import { DummyHospital, DummyObat } from '../../data'
import { Gap, HeaderComponent, Input, ListHospital, Tombol } from '../../components'
import ListObat from '../../components/besar/ListObat'


export default class Obat extends Component {
  onBack = () => {
    this.props.navigation.goBack();
};

  constructor(props) {
    super(props)

    this.state = {
        Obats:DummyObat
    }
}
  render() {
    const {Obats,} = this.state
    const {navigation} = this.props
    return (
      <SafeAreaView style={styles.container}>
        <HeaderComponent Title="Toko Obat" onPress={this.onBack} />
        <View style={styles.bordersearch}>
            <Tombol TotalKeranjang={12} navigation={navigation}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap Height={22}/>
          <ListObat Obats={Obats} navigation={navigation} />
        </ScrollView>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  bordersearch: {
    marginTop: 12,
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  inputan:{
    // backgroundColor:'blue',
    flex:1
  },

})

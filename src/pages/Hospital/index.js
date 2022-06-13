import { Text, StyleSheet, View, TextInput, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Search } from '../../assets'
import { Colors } from '../../utils'
import { DummyHospital } from '../../data'
import { Gap, HeaderComponent, ListHospital } from '../../components'

export default class Hospital extends Component {
  onBack = () => {
    this.props.navigation.goBack();
};
  constructor(props) {
    super(props)
  
    this.state = {
       Hosptials:DummyHospital
    }
  }
  render() {
    const {Hosptials}= this.state
    return (
      <SafeAreaView style={styles.container}>
        <HeaderComponent Title="Hospital" onPress={this.onBack}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View style={styles.hospital}> */}
            <Gap Height={14}/>
            <ListHospital Hosptials={Hosptials}/>
          {/* </View> */}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    // backgroundColor:Colors.Black,
    flex:1
  },
  bordersearch: {
    backgroundColor: Colors.Gerydus,
    marginTop: 12,
    marginHorizontal: 15,
    borderRadius: 8,
    marginBottom:22
  },
  border: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  hospital:{
    marginHorizontal:15,
    flex:1,
    // backgroundColor:Colors.Blue,
  },
  inputan:{
    // backgroundColor:'blue',
    flex:1
  }
})
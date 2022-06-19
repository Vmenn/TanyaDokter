import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import { Gap, HeaderComponent, ListBerita } from '../../components'
import { Mental, Share, TimeUpload } from '../../assets'
import { Colors, responsiveHeight, responsiveWidth } from '../../utils'
import { DummyNews } from '../../data'

export default class News extends Component {
  onNews = () => {
    this.props.navigation.replace('News');
  };

  onCategory = () => {
    this.props.navigation.replace('Category');
  };
  onBack = () => {
    this.props.navigation.goBack();
};
  constructor(props) {
    super(props)

    this.state = {
      News: DummyNews,
    }
  }
  render() {
    const {News } = this.state
    const {navigation} = this.props
    return (
      <SafeAreaView style={styles.container}>
          <HeaderComponent Title="News" onPress={this.onBack}/>
          <Gap Height={4} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <ListBerita News={News} navigation={navigation}/> 
          </ScrollView>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  items: {
    marginHorizontal: 15,
    marginTop: 14,
    borderRadius: 8,
    flexDirection: 'row',
    height: responsiveHeight(125),
    maxHeight: responsiveHeight(125),
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
  gambarbackround: {
    height: responsiveHeight(125),
    maxHeight: responsiveHeight(125),
    width: responsiveWidth(125),
    maxWidth: responsiveWidth(125),
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6
  },
  gambar: {
    height: responsiveHeight(125),
    maxHeight: responsiveHeight(125),
    width: responsiveWidth(125),
    maxWidth: responsiveWidth(125),
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    flex: 1,
  },
  description: {
    // backgroundColor:Colors.FontsSecond,
    flex: 1,
    height: responsiveHeight(125),
    maxHeight: responsiveHeight(125),
    marginHorizontal: 10,
    marginVertical: 6
  },
  timeupload: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor:"blue",
    flex: 1,

  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})
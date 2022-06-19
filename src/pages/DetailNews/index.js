import { Text, StyleSheet, View, ScrollView,Image } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderComponent } from '../../components'

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
      <SafeAreaView>
        <HeaderComponent Title="Detail News"/>
        <ScrollView showsVerticalScrollIndicator={false}>
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

const styles = StyleSheet.create({})
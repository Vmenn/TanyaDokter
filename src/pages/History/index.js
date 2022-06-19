import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import { HeaderComponent, ListHistory } from '../../components'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'
import { IconKerCil } from '../../assets'
import { DummyPesanan } from '../../data'
export default class History extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Pesanans: DummyPesanan
      }
    }
    render() {
        const {Pesanans}=this.state
        return (
            <View style={styles.pages}>
                <HeaderComponent Title="History" onPress={() => this.props.navigation.goBack()} />
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                    <ListHistory Pesanans={Pesanans}/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
    },
})
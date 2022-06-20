import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Category extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Cat: this.props.route.params.Cat,
      images: this.props.route.params.Cat.gambar
    }
  }
  render() {
    const { Cat, images } = this.state
    return (
      <View>
        <Text>{Cat.nama}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
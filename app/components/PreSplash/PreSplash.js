import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default class PreSplash extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../images/logo.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    resizeMode: 'contain',
    height: 300
  }
})

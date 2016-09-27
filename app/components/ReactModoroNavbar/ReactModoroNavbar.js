import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import NavigationBar from 'react-native-navbar'

export default class ReactModoroNavbar extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <NavigationBar title={{title: 'Home'}} />
    )
  }
}

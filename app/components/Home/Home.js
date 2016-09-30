import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import { ReactModoroNavbar, Gear, Hamburger } from '~/components'

Home.propTypes = {
  openDrawer: PropTypes.func,
  handleToSettings: PropTypes.func.isRequired
}

export default function Home (props) {
  return (
    <View>
      <ReactModoroNavbar
        title='Home'
        rightButton={<Gear onPress={props.handleToSettings} />}
        leftButton={Platform.OS === 'android' ? <Hamburger onPress={props.openDrawer} /> : null}
      />
      <Text>
        Home
      </Text>
    </View>
  )
}

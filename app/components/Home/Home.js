import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import { ReactModoroNavbar, Gear, Hamburger } from '~/components'

Home.propTypes = {
  openDrawer: PropTypes.func
}

export default function Home (props) {
  return (
    <View>
      <ReactModoroNavbar
        title='Home'
        rightButton={<Gear onPress={() => console.log('Gear!')} />}
        leftButton={Platform.OS === 'android' ? <Hamburger onPress={props.openDrawer} /> : null}
      />
      <Text>
        Home
      </Text>
    </View>
  )
}

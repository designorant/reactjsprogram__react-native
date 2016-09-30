import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import { ReactModoroNavbar, Gear, Hamburger } from '~/components'

Home.propTypes = {

}

export default function Home (props) {
  return (
    <View>
      <ReactModoroNavbar
        title='Foobar'
        rightButton={<Gear onPress={() => console.log('Gear!')} />}
        leftButton={Platform.OS === 'android' ? <Hamburger onPress={() => console.log('Hamburger!')} /> : null}
      />
      <Text>
        Home
      </Text>
    </View>
  )
}

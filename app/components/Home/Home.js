import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ReactModoroNavbar } from '~/components'

Home.propTypes = {

}

export default function Home (props) {
  return (
    <View>
      <ReactModoroNavbar />
      <Text>
        Home
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

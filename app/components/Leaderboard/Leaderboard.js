import React, { PropTypes } from 'react'
import { View, StyleSheet, Platform, ActivityIndicator } from 'react-native'
import { ReactModoroNavbar, Hamburger } from '~/components'
import { colors } from '~/styles'
import Leader from './Leader'

Leaderboard.propTypes = {
  openDrawer: PropTypes.func,
  listenerSet: PropTypes.bool.isRequired,
  leaders: PropTypes.array.isRequired
}

export default function Leaderboard (props) {
  return (
    <View>
      <ReactModoroNavbar
        title='Leaderboard'
        leftButton={Platform.OS === 'android' ? <Hamburger onPress={props.openDrawer} /> : null}
      />
      {props.listenerSet === false
        ? <ActivityIndicator size='small' style={styles.activityIndicator} color={colors.secondary} />
        : props.leaders.map((leader) => (
          <Leader name={leader.displayName} avatar={leader.photoURL} score={leader.score} key={leader.uid} />
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  activityIndicator: {
    marginTop: 30
  }
})

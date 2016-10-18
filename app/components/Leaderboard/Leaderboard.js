import React, { PropTypes } from 'react'
import { View, StyleSheet, Platform, ActivityIndicator, ListView } from 'react-native'
import { ReactModoroNavbar, Hamburger } from '~/components'
import { colors } from '~/styles'

Leaderboard.propTypes = {
  openDrawer: PropTypes.func,
  listenerSet: PropTypes.bool.isRequired,
  dataSource: PropTypes.object.isRequired,
  renderRow: PropTypes.func.isRequired
}

export default function Leaderboard (props) {
  return (
    <View style={styles.container}>
      <ReactModoroNavbar
        title='Leaderboard'
        leftButton={Platform.OS === 'android' ? <Hamburger onPress={props.openDrawer} /> : null}
      />
      {props.listenerSet === false
        ? <ActivityIndicator size='small' style={styles.activityIndicator} color={colors.secondary} />
        : <ListView renderRow={props.renderRow} dataSource={props.dataSource} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginBottom: 50
  },
  activityIndicator: {
    marginTop: 30
  }
})

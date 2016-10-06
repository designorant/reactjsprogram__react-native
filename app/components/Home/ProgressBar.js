import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  incompleteBackgroundColor: PropTypes.string.isRequired
}

ProgressBar.defaultProps = {
  style: {},
  incompleteBackgroundColor: '#fff'
}

export default function ProgressBar (props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={{flex: props.progress}} />
      <View style={{flex: 1 - props.progress, backgroundColor: props.incompleteBackgroundColor}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#4a90e2'
  }
})

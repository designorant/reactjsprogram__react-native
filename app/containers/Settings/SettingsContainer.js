import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Settings } from '~/components'
import { connect } from 'react-redux'
import { handleUnauth } from '~/redux/modules/authentication'

class SettingsContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }
  state = {
    timerDuration: 20,
    restDuration: 5
  }
  handleTimerChange = (timerDuration) => {
    this.setState({timerDuration})
  }
  handleRestChange = (restDuration) => {
    this.setState({restDuration})
  }
  handleTimerComplete = () => {
    console.log('Finished Sliding Timer')
  }
  handleRestComplete = () => {
    console.log('Finished Sliding Rest Timer')
  }
  handleLogout = () => {
    this.props.dispatch(handleUnauth())
  }
  render () {
    return (
      <Settings
        onBack={this.props.navigator.pop}
        onTimerChange={this.handleTimerChange}
        onRestChange={this.handleRestChange}
        onTimerComplete={this.handleTimerComplete}
        onRestComplete={this.handleRestComplete}
        onLogout={this.handleLogout}
        timerDuration={this.state.timerDuration}
        restDuration={this.state.restDuration} />
    )
  }
}

export default connect()(SettingsContainer)

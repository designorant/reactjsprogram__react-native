import React, { PropTypes, Component } from 'react'
import { Settings } from '~/components'
import { connect } from 'react-redux'
import { handleUnauth } from '~/redux/modules/authentication'
import { showFlashNotification } from '~/redux/modules/flashNotification'
import { addSettingsTimerDuration, addSettingsRestDuration } from '~/redux/modules/settings'

class SettingsContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    timerDuration: PropTypes.number.isRequired,
    restDuration: PropTypes.number.isRequired
  }
  state = {
    timerDuration: this.props.timerDuration,
    restDuration: this.props.restDuration
  }
  handleTimerChange = (timerDuration) => {
    this.setState({timerDuration})
  }
  handleRestChange = (restDuration) => {
    this.setState({restDuration})
  }
  handleTimerComplete = () => {
    this.props.dispatch(showFlashNotification({text: 'Timer Duration Saved!'}))
    this.props.dispatch(addSettingsTimerDuration(this.state.timerDuration))
  }
  handleRestComplete = () => {
    this.props.dispatch(showFlashNotification({text: 'Rest Duration Saved!'}))
    this.props.dispatch(addSettingsRestDuration(this.state.restDuration))
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

function mapStateToProps ({settings}) {
  return {
    timerDuration: settings.timerDuration,
    restDuration: settings.restDuration
  }
}

export default connect(
  mapStateToProps
)(SettingsContainer)

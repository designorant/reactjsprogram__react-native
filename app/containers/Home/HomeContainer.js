import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Home } from '~/components'

function secondsToHMS (secs) {
  const hours = Math.floor(secs / 3600)
  const mins = Math.floor(secs % 3600 / 60)
  const seconds = Math.floor(secs % 3600 % 60)
  return ((hours > 0 ? hours + ':' + (mins < 10 ? '0' : '') : '') + mins + ':' + (seconds < 10 ? '0' : '') + seconds)
}

class HomeContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired,
    timerDuration: PropTypes.number.isRequired,
    restDuration: PropTypes.number.isRequired
  }
  state = {
    timer: this.props.timerDuration,
    rest: this.props.restDuration,
    activeCountdown: 'timer',
    countdownRunning: false
  }
  handleToggleCountdown = () => {
    if (this.state.countdownRunning === true) {
      this.setState({countdownRunning: false})
      return window.clearInterval(this.interval)
    }

    this.interval = setInterval(() => {
      const activeCountdown = this.state.activeCountdown
      const nextSecond = this.state[activeCountdown] - 1

      if (nextSecond === 0) {
        this.setState({
          [activeCountdown]: activeCountdown === 'timer'
            ? this.props.timerDuration
            : this.props.restDuration,
          activeCountdown: activeCountdown === 'timer'
            ? 'rest'
            : 'timer'
        })
      } else {
        this.setState({
          [activeCountdown]: nextSecond,
          countdownRunning: true
        })
      }
    }, 1000)
  }
  handleReset = () => {
    window.clearInterval(this.interval)
    this.setState({
      timer: this.props.timerDuration,
      countdownRunning: false
    })
  }
  handleSkipRest = () => {
    this.setState({
      rest: this.props.restDuration,
      activeCountdown: 'timer'
    })
  }
  handleToSettings = () => {
    this.props.navigator.push({
      settings: true
    })
  }
  render () {
    return (
      <Home
        handleToSettings={this.handleToSettings}
        openDrawer={this.props.openDrawer}
        timer={secondsToHMS(this.state.timer)}
        rest={secondsToHMS(this.state.rest)}
        activeCountdown={this.state.activeCountdown}
        onReset={this.handleReset}
        onSkipRest={this.handleSkipRest}
        onToggleCountdown={this.handleToggleCountdown} />
    )
  }
}

function mapStateToProps ({settings}) {
  return {
    timerDuration: settings.timerDuration * 60,
    restDuration: settings.restDuration * 60
  }
}

export default connect(
  mapStateToProps
)(HomeContainer)

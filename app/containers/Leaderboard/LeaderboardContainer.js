import React, { PropTypes, Component } from 'react'
import { Leaderboard } from '~/components'
import { connect } from 'react-redux'
import { fetchAndSetScoresListener } from '~/redux/modules/scores'

class LeaderboardContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired,
    listenerSet: PropTypes.bool.isRequired,
    leaders: PropTypes.array.isRequired
  }
  componentDidMount () {
    if (this.props.listenerSet === false) {
      this.props.dispatch(fetchAndSetScoresListener())
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.leaders !== this.props.leaders) {
      console.log('New Leaders!', nextProps.leaders)
    }
  }
  render () {
    return (
      <Leaderboard
        listenerSet={this.props.listenerSet}
        leaders={this.props.leaders}
        openDrawer={this.props.openDrawer} />
    )
  }
}

function mapStateToProps ({scores, users}) {
  return {
    listenerSet: scores.listenerSet,
    leaders: scores.leaderboardUids.map((uid) => {
      return {
        score: scores.userScores[uid],
        ...users[uid]
      }
    })
  }
}

export default connect(
  mapStateToProps
)(LeaderboardContainer)

import React, { PropTypes, Component } from 'react'
import { ListView } from 'react-native'
import { Leaderboard } from '~/components'
import { connect } from 'react-redux'
import { fetchAndSetScoresListener } from '~/redux/modules/scores'
import Leader from '~/components/Leaderboard/Leader'

class LeaderboardContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired,
    listenerSet: PropTypes.bool.isRequired,
    leaders: PropTypes.array.isRequired
  }
  constructor (props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.leaders)
    }
  }
  componentDidMount () {
    if (this.props.listenerSet === false) {
      this.props.dispatch(fetchAndSetScoresListener())
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.leaders !== this.props.leaders) {
      console.log('New Leaders!', nextProps.leaders)
      this.setState({
        dataSource: this.ds.cloneWithRows(nextProps.leaders)
      })
    }
  }
  renderRow = ({displayName, photoURL, score}) => {
    return <Leader name={displayName} avatar={photoURL} score={score} />
  }
  render () {
    return (
      <Leaderboard
        listenerSet={this.props.listenerSet}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
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

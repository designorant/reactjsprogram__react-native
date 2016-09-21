import React, { PropTypes, Component } from 'react'
import { FooterTabs } from '~/components'
import { connect } from 'react-redux'
import { setFooterTab } from '~/redux/modules/activeFooterTab'

class FooterTabsContainer extends Component {
  static propTypes = {
    activeFooterTab: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }
  state = {}
  render () {
    return (
      <FooterTabs
        activeFooterTab={this.props.activeFooterTab}
        onTabSelect={(tab) => this.props.dispatch(setFooterTab(tab))} />
    )
  }
}

function mapStateToProps ({activeFooterTab}) {
  return {
    activeFooterTab
  }
}

export default connect(
  mapStateToProps
)(FooterTabsContainer)

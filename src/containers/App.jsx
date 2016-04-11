import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import ContentRoot from '../components/ContentRoot.jsx'

class App extends Component {
  componentDidMount() {
    this.props.fetchMyItems()
  }
  render() {
    return (
      <ContentRoot {...this.props} />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const mapStateToProps = (state) => {
  console.log('state',state);
  return {
    app: state.app,
    form: state.form
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

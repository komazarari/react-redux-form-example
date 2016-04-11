import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

/// actionCreators >>>
function action1(value) {
  return {
    type: 'ACTION1',
    value
  }
}
/// <<<

/// reducers >>>
function appReducer(state, action) {
  switch (action.type) {
    case 'ACTION1':
      return Object.assign({}, state, { v1: action.value });
    default:
      return state;
  }
}
/// <<<

/// components >>>
const Comp1 = (props) => (
  <div>
    <div>This is Comp1. value is '{props.value}'.</div>
    <button onClick={() => props.action('VALUE')} >doAction1</button>
  </div>
);

/// <<<

class RootApp extends Component {
  render() {
    return (
      <div>
        Hello, this is root component.
        <Comp1
            value={this.props.value1}
            action={this.props.action1}
        />
      </div>
    )
  }
}

const App = connect(
  (state) => { return { value1: state.v1} }, // mapStateToProps
  (dispatch) => { return { action1: (v1) => dispatch(action1(v1)) } }// mapDispatchToProps
)(RootApp);

const rootElement = document.getElementById('content');
const initialValues = { v1: 'initialvalue' };
const store = createStore(appReducer, initialValues);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

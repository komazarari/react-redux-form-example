import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App.jsx'

const rootElement = document.getElementById('content');
const store = configureStore({app: {myItems: { data: []}}});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SearchContainer from './containers/SearchContainer';
import reducer from './reducers';



const store = createStore(reducer);

render(
  <Provider store={store}>
    <SearchContainer />
  </Provider>,
  document.getElementById('root')
);
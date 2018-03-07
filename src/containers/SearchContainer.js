import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import SimpleMap from '../components/SimpleMap'
import SearchGuide from '../components/SeachGuide'

class SearchContainer extends Component {
  render() {
    return (
      <div id="sc">
        <SearchGuide id="searchguide"/>
        <SimpleMap />
      </div>
    )
  }
}

const mapState = (state, ownProps) => ({
  search: state.search,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}


export default connect(mapState, mapDispatch)(SearchContainer);
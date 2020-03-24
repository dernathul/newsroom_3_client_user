import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchArticles} from '../state/actions/articleAction';
import { bindActionCreators } from 'redux'

class DisplayArticles extends Component {

  componentDidMount() {
  //fetchArticles()
  //debugger
  }
  render() {
    return (
    <div>

    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(DisplayArticles);

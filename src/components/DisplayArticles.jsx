import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchArticles} from '../state/actions/articleAction';
import { bindActionCreators } from 'redux'

class DisplayArticles extends Component {

  componentDidMount() {
  this.props.fetchArticles()
  }
  render() {
    debugger
    return (
    <div>

    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayArticles);

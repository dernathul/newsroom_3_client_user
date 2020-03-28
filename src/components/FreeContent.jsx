import React from "react";
import {connect} from "react-redux"

const FreeContent = props => {
  let article = props.singleArticle
  return <>
    <p>{article.content}</p>;
    </>
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  };
};

export default connect(mapStateToProps)(FreeContent);

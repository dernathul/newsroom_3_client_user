import React from "react";
import {connect} from "react-redux"

const FreeContent = props => {
  let article = props.singleArticle
  return <div>
    <p>{article.content}</p>
  </div>;
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  };
};

export default connect(mapStateToProps)(FreeContent);

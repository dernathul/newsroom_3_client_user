import React from "react";
import { connect } from "react-redux";

const FullContent = props => {
  let article = props.singleArticle;
  return (
    <>
      <p>{article.content}</p>;
    </>
  );
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  };
};

export default connect(mapStateToProps)(FullContent);

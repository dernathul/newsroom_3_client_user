import React from "react";
import {connect} from "react-redux"

const PremiumContent = props => {
  let article = props.singleArticle

  return <div>
    <p>This is premium article</p>
  </div>;
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  };
};

export default connect(mapStateToProps)(PremiumContent);
import React from "react";
import {connect} from "react-redux"

const PremiumContent = props => {
  let article = props.singleArticle

  let shortContent = article.content.substring(0, 20) + '...'
  return <>
    <p>{shortContent}</p>
    <button>Buy Subscription</button>
  </>;
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  };
};

export default connect(mapStateToProps)(PremiumContent);
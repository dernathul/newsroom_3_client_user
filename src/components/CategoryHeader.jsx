import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { SELECT_CATEGORY } from "../state/actions/actionTypes";
import { Link } from "react-router-dom";
import {SHOW_LOGIN_FORM} from "../state/actions/actionTypes";
import {AUTHENTICATE} from "../state/actions/actionTypes"


const CategoryHeader = props => {
  const handleItemClick = event => {
    props.dispatch({
      type: SELECT_CATEGORY,
      payload: {
        selectedCategory: event.target.id,
        activeItem: event.target.active
      }
    });
  };

  let switchLoginAndLogOut =
    currentUser.role === "reg_user" || currentUser.role === "subscriber" ?  (
      <>
      <button
        onClick={() =>
          props.dispatch({
            type: AUTHENTICATE,
            payload: { authenticated: false }
          })
        }
      >
        New Log out
      </button>
      </>
    ) : (
      <>
      <button id = "login-button"
      onClick = {() => props.dispatch({type: SHOW_LOGIN_FORM, payload: {showLoginForm: true}})}>New Login</button>
    </>
    );

  return (
    
    <Segment inverted>
      <Menu id="category-header" inverted pointing secondary>
        <Menu.Item
          name="home"
          id=""
          as={Link}
          to={{ pathname: "/" }}
          active={props.activeItem === "all"}
          onClick={handleItemClick}
        ></Menu.Item>
        <Menu.Item
          name="latest_news"
          id="latest_news"
          as={Link}
          to={{ pathname: "/latest_news" }}
          active={props.activeItem === "latest_news"}
          onClick={handleItemClick}
        >
          Latest News
        </Menu.Item>
        <Menu.Item
          name="tech"
          id="tech"
          as={Link}
          to={{ pathname: "/tech" }}
          active={props.activeItem === "tech"}
          onClick={handleItemClick}
        >
          Tech
        </Menu.Item>
        <Menu.Item
          name="sports"
          id="sports"
          as={Link}
          to={{ pathname: "/sports" }}
          active={props.activeItem === "sports"}
          onClick={handleItemClick}
        >
          Sports
        </Menu.Item>
        <Menu.Item
          name="politics"
          id="politics"
          as={Link}
          to={{ pathname: "/politics" }}
          active={props.activeItem === "politics"}
          onClick={handleItemClick}
        >
          Politics
        </Menu.Item>
        <Menu.Item
          name="culture"
          id="culture"
          as={Link}
          to={{ pathname: "/culture" }}
          active={props.activeItem === "culture"}
          onClick={handleItemClick}
        >
          Culture
        </Menu.Item>
        <Menu.Item id = "login-button"
        >
          {switchLoginAndLogOut}
          </Menu.Item>
      </Menu>
      
     
    
    </Segment>
   


  );
};

export default connect()(CategoryHeader);

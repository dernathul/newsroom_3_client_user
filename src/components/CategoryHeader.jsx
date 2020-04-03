import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import {
  SELECT_CATEGORY,
  LOGOUT,
  SHOW_LOGIN_FORM,
  SHOW_SIGN_UP_FORM
} from "../state/actions/actionTypes";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'



const CategoryHeader = props => {
  const { t } = useTranslation()
  const edition = useSelector( state => state.session.edition )
  const handleItemClick = event => {
    props.dispatch({
      type: SELECT_CATEGORY,
      payload: {
        selectedCategory: event.target.id,
        activeItem: event.target.active
      }
    });
  };
  let currentUser = props.currentUser;

  let switchLoginAndLogOut =
    currentUser.role === "reg_user" || currentUser.role === "subscriber" ? (
      <>
        <button
          class="ui secondary button"
          id="logout-button"
          onClick={() =>
            props.dispatch({
              type: LOGOUT,
              payload: { authenticated: false, currentUser: {} }
            })
          }
        >
          {t('Log out')}
        </button>
      </>
    ) : (
        <>
          <button
            class="ui secondary button"
            id="sign-up"
            onClick={() =>
              props.dispatch({
                type: SHOW_SIGN_UP_FORM,
                payload: { showSignUpForm: true, showLoginForm: false }
              })
            }
          >
            {t('Sign up')}
          </button>
          <button
            class="ui secondary button"
            id="login-button"
            onClick={() =>
              props.dispatch({
                type: SHOW_LOGIN_FORM,
                payload: { showLoginForm: true, showSignUpForm: false }
              })
            }
          >
            {t('Login')}
          </button>
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
        >{t('Home')}</Menu.Item>
        <Menu.Item
          name="latest_news"
          id="latest_news"
          as={Link}
          to={{ pathname: "/latest_news" }}
          active={props.activeItem === "latest_news"}
          onClick={handleItemClick}
        >
          {t('Latest News')}
        </Menu.Item>
        <Menu.Item
          name="tech"
          id="tech"
          as={Link}
          to={{ pathname: "/tech" }}
          active={props.activeItem === "tech"}
          onClick={handleItemClick}
        >
          {t('Tech')}
        </Menu.Item>
        <Menu.Item
          name="sports"
          id="sports"
          as={Link}
          to={{ pathname: "/sports" }}
          active={props.activeItem === "sports"}
          onClick={handleItemClick}
        >
          {t('Sports')}
        </Menu.Item>
        <Menu.Item
          name="politics"
          id="politics"
          as={Link}
          to={{ pathname: "/politics" }}
          active={props.activeItem === "politics"}
          onClick={handleItemClick}
        >
          {t('Politics')}
        </Menu.Item>
        <Menu.Item
          name="culture"
          id="culture"
          as={Link}
          to={{ pathname: "/culture" }}
          active={props.activeItem === "culture"}
          onClick={handleItemClick}
        >
          {t('Culture')}
        </Menu.Item>
        <Menu.Item
          name="edition"
          id="edition"
          as={Link}
          to={{ pathname: "/edition" }}
          active={props.activeItem === "edition"}
          onClick={handleItemClick}
        >
        {`${edition} Edition`}
        </Menu.Item>
        {switchLoginAndLogOut}
        <Menu.Item onClick={() => i18n.changeLanguage('en')}>EN</Menu.Item>
        <Menu.Item onClick={() => i18n.changeLanguage('sv')}>SV</Menu.Item>

      </Menu>
    </Segment>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(CategoryHeader);

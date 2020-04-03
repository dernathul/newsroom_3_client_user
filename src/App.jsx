import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import CategoryHeader from "./components/CategoryHeader";
import DisplayComponents from "./components/DisplayComponents";
import axios from 'axios'

const App = props => {
  useEffect( () => {
    navigator.geolocation.getCurrentPosition( async pos => {
      const currentSession = await axios.post('https://newsroom3api.herokuapp.com/api/v1/auth/sign_in', {location: pos.coords})
     debugger
    });
  }, []);

  return (
    <>
      <CategoryHeader />
      <Switch>
        <Route exact path="/" component={DisplayComponents}></Route>
        <Route
          exact
          path={props.selectedCategory}
          component={DisplayComponents}
        ></Route>
      </Switch>
    </>
  );
};

export default App;

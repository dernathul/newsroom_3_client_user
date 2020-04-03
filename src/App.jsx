import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import CategoryHeader from "./components/CategoryHeader";
import DisplayComponents from "./components/DisplayComponents";

const App = props => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
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

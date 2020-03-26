import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryHeader from "./components/CategoryHeader";
import DisplayComponents from "./components/DisplayComponents";

const App = props => {

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

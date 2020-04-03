import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import { StripeProvider } from "react-stripe-elements";
import './i18n'

axios.defaults.baseURL = "https://newsroom3api.herokuapp.com/api/v1";

const store = configureStore();
window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <StripeProvider apiKey='pk_test_80OAV5NYF42UKxVAzu8MRvzI00eg82xAQ3'>
      <BrowserRouter>
        <Suspense fallback={(<div>Loading...</div>)} >
          <App />
        </Suspense>
      </BrowserRouter>
    </StripeProvider>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();

if (window.Cypress) {
  window.store = store
}
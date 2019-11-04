import * as React from 'react'
import { Component } from "react";
import { render } from "react-dom";
// import './index.css'
import { BrowserHistory, HashRouter } from "react-router-dom";
import { LocaleProvider } from "antd";
import th_TH from "antd/es/locale-provider/th_TH";
import moment from "moment";
import "moment/locale/th";
import { Body } from "./components/Body";
import "antd/dist/antd.css";
import 'semantic-ui-css/semantic.min.css'
moment.locale("th");

class App extends Component {
  render() {
    return (
      <HashRouter history={BrowserHistory}>
        <LocaleProvider locale={th_TH}>
          <Body />
        </LocaleProvider>
      </HashRouter>
    );
  }
}

render(<App />, document.getElementById("root"));

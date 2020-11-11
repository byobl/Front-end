import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter,Route } from 'react-router-dom';

import Home from "./home";
import UserMain from "./UserMain";
import InstitutionMain from "./InstitutionMain"
import {LogIn} from "./UserInfo/index"
import {WalletMain} from "./User/Wallet/index"
import {CertificateMain} from "./User/Certificate/index"
import {IssureRegister} from "./Institute/Issuer/index"
import {Dashboard} from "./Institute/Verifier/index"

ReactDOM.render(
  <BrowserRouter>
  <Route path="/" component={UserMain} exact />
  <Route path="/home" component={Home} exact />
  <Route path="/institutionMain" component={InstitutionMain} exact />
  <Route path="/login" component={LogIn} exact />
  <Route path="/walletMain" component={WalletMain} exact />
  <Route path="/certificateMain" component={CertificateMain} exact />
  <Route path="/issureRegister" component={IssureRegister} exact />
  <Route path="/dashboard" component={Dashboard} exact />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

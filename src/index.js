import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter,Route } from 'react-router-dom';

import Home from "./home";
import UserMain from "./UserMain";
import InstitutionMain from "./InstitutionMain"
import {LogIn,Join,SignUp,InfoRegistration,EmailAuth} from "./UserInfo/index"
import {WalletMain, CreateWallet} from "./User/Wallet/index"
import {CertificateMain, CareerRegistration, MyCombination, CareerInstitution, CareerRequest, 
  Announcement,MyChoice,MyPrintForm,MyIssueForm,MyTypeForm,CertificateResult} from "./User/Certificate/index"
import {IssureRegister} from "./Institute/Issuer/index"
import {Dashboard} from "./Institute/Verifier/index"

ReactDOM.render(
  <BrowserRouter>
  <Route path="/" component={UserMain} exact />
  <Route path="/home" component={Home} exact />
  <Route path="/institutionMain" component={InstitutionMain} exact />
  <Route path="/userinfo/Join" component={Join} exact />
  <Route path="/userinfo/login" component={LogIn} exact />
  <Route path="/userinfo/signup" component={SignUp} exact />
  <Route path="/userinfo/infoRegistration" component={InfoRegistration} exact />
  <Route path="/userinfo/emailAuth" component={EmailAuth} exact />
  <Route path="/wallet/walletMain" component={WalletMain} exact />
  <Route path="/wallet/createWallet" component={CreateWallet} exact /> 
  <Route path="/certificateMain" component={CertificateMain} exact />
  <Route path="/issureRegister" component={IssureRegister} exact />
  <Route path="/dashboard" component={Dashboard} exact />
  <Route path="/certificate/careerRegistration" component={CareerRegistration} exact />
  <Route path="/certificate/myCombination" component={MyCombination} exact />
  <Route path="/certificate/careerInstitution" component={CareerInstitution} exact />
  <Route path="/certificate/careerRequest" component={CareerRequest} exact />
  <Route path="/certificate/announcement" component={Announcement} exact />
  <Route path="/certificate/myChoice" component={MyChoice} exact />
  <Route path="/certificate/myPrintForm" component={MyPrintForm} exact />
  <Route path="/certificate/myTypeForm" component={MyTypeForm} exact />
  <Route path="/certificate/myIssueForm" component={MyIssueForm} exact />
  <Route path="/certificate/certificateResult" component={CertificateResult} exact />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter,Route } from 'react-router-dom';

import Home from "./home";
import UserMain from "./UserMain";
import InstitutionMain from "./InstitutionMain"
import {LogIn,Join,SignUp,InfoRegistration,EmailAuth} from "./UserInfo/index"
import {WalletMain, IdentityVerification, CreateWallet, LoadWallet, FirstStep, SecondStep, ThirdStep, UploadWallet, CompleteCreation, FailAccess, FailAccess2} from "./User/Wallet/index"
import {CertificateMain, CareerRegistration, MyCombination, CareerInstitution, CareerRequest, Announcement} from "./User/Certificate/index"
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
  <Route path="/userinfo/EmailAuth" component={EmailAuth} exact />
  <Route path="/wallet/walletMain" component={WalletMain} exact />
  <Route path="/wallet/IdentityVerification" component={IdentityVerification} exact />
  <Route path="/wallet/createWallet" component={CreateWallet} exact />
  <Route path="/wallet/loadWallet" component={LoadWallet} exact />
  <Route path="/wallet/FirstStep" component={FirstStep} exact />
  <Route path="/wallet/SecondStep" component={SecondStep} exact />
  <Route path="/wallet/ThirdStep" component={ThirdStep} exact />
  <Route path="/wallet/UploadWallet" component={UploadWallet} exact />
  <Route path="/wallet/CompleteCreation" component={CompleteCreation} exact />
  <Route path="/wallet/failAccess" component={FailAccess} exact />
  <Route path="/wallet/failAccess2" component={FailAccess2} exact />
  <Route path="/certificateMain" component={CertificateMain} exact />
  <Route path="/issureRegister" component={IssureRegister} exact />
  <Route path="/dashboard" component={Dashboard} exact />
  <Route path="/certificate/careerRegistration" component={CareerRegistration} exact />
  <Route path="/certificate/MyCombination" component={MyCombination} exact />
  <Route path="/certificate/careerInstitution" component={CareerInstitution} exact />
  <Route path="/certificate/careerRequest" component={CareerRequest} exact />
  <Route path="/certificate/announcement" component={Announcement} exact />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

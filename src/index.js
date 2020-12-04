import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./home"
import UserMain from "./UserMain"
import InstitutionMain from "./InstitutionMain"
import { LogIn, Join, SignUp, SignupTerms, InfoRegistration, EmailAuth } from "./UserInfo/index"
import {
  CertificateMain, CareerRegistration, CareerInstitution, CareerChoice, CareerRequest, MyCombination,
  MyChoice, MyPrintForm, MyTypeForm, MyIssueForm, Announcement, Announcement2, CertificateResult, CertificateResult2
} from "./User/Certificate/index"
import {
  WalletMain, IdentityVerification, CreateWallet, LoadWallet, FirstStep, SecondStep, ThirdStep,
  UploadWallet, CompleteCreation, FailAccess, FailAccess2
} from "./User/Wallet/index"
import { Mysillock } from "./User/Profile/index"
import { IssureRegister } from "./Institute/Issuer/index"
import { Dashboard } from "./Institute/Verifier/index"

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={UserMain} exact />
    <Route path="/home" component={Home} exact />
    <Route path="/institutionMain" component={InstitutionMain} exact />
    <Route path="/user/profile/mysillock" component={Mysillock} exact />
    <Route path="/userinfo/join" component={Join} exact />
    <Route path="/userinfo/login" component={LogIn} exact />
    <Route path="/userinfo/signup" component={SignUp} exact />
    <Route path="/userinfo/signupTerms" component={SignupTerms} exact />
    <Route path="/userinfo/infoRegistration" component={InfoRegistration} exact />
    <Route path="/userinfo/EmailAuth" component={EmailAuth} exact />
    <Route path="/wallet/walletMain" component={WalletMain} exact />
    <Route path="/wallet/IdentityVerification" component={IdentityVerification} exact />
    <Route path="/wallet/createWallet" component={CreateWallet} exact />
    <Route path="/wallet/loadWallet" component={LoadWallet} exact />
    <Route path="/wallet/FirstStep" component={FirstStep} exact />
    <Route path="/wallet/SecondStep" component={SecondStep} exact />
    <Route path="/wallet/ThirdStep" component={ThirdStep} exact />
    <Route path="/wallet/uploadWallet" component={UploadWallet} exact />
    <Route path="/wallet/completeCreation" component={CompleteCreation} exact />
    <Route path="/wallet/failAccess" component={FailAccess} exact />
    <Route path="/wallet/failAccess2" component={FailAccess2} exact />
    <Route path="/certificateMain" component={CertificateMain} exact />
    <Route path="/issureRegister" component={IssureRegister} exact />
    <Route path="/dashboard" component={Dashboard} exact />
    <Route path="/certificate/careerRegistration" component={CareerRegistration} exact />
    <Route path="/certificate/myCombination" component={MyCombination} exact />
    <Route path="/certificate/careerInstitution" component={CareerInstitution} exact />
    <Route path="/certificate/careerChoice" component={CareerChoice} exact />
    <Route path="/certificate/careerRequest" component={CareerRequest} exact />
    <Route path="/certificate/announcement" component={Announcement} exact />
    <Route path="/certificate/announcement2" component={Announcement2} exact />
    <Route path="/certificate/myChoice" component={MyChoice} exact />
    <Route path="/certificate/myPrintForm" component={MyPrintForm} exact />
    <Route path="/certificate/myTypeForm" component={MyTypeForm} exact />
    <Route path="/certificate/myIssueForm" component={MyIssueForm} exact />
    <Route path="/certificate/certificateResult" component={CertificateResult} exact />
    <Route path="/certificate/certificateResult2" component={CertificateResult2} exact />

=======
import { BrowserRouter,Route } from 'react-router-dom';
import Home from "./home"
import UserMain from "./UserMain"
import InstitutionMain from "./InstitutionMain"
import {LogIn,Join,SignUp,SignupTerms,InfoRegistration,EmailAuth} from "./UserInfo/index"
import {CertificateMain,CareerRegistration,CareerInstitution,CareerChoice,CareerRequest,MyCombination,
  MyChoice,MyPrintForm,MyTypeForm,MyIssueForm,Announcement, Announcement2, CertificateResult, CertificateResult2} from "./User/Certificate/index"
import {WalletMain, IdentityVerification, CreateWallet, LoadWallet, FirstStep, SecondStep, ThirdStep, 
        UploadWallet, CompleteCreation, FailAccess, FailAccess2} from "./User/Wallet/index"
import {Mysillock} from "./User/Profile/index"
import {IssureRegister} from "./Institute/Issuer/index"
import {Dashboard} from "./Institute/Verifier/index"



ReactDOM.render(
  <BrowserRouter>
  <Route path="/" component={UserMain} exact />
  <Route path="/home" component={Home} exact />
  <Route path="/institutionMain" component={InstitutionMain} exact />
  <Route path="/user/profile/mysillock" component={Mysillock} exact />
  <Route path="/userinfo/join" component={Join} exact />
  <Route path="/userinfo/login" component={LogIn} exact />
  <Route path="/userinfo/signup" component={SignUp} exact />
  <Route path="/userinfo/signupTerms" component={SignupTerms} exact />
  <Route path="/userinfo/infoRegistration" component={InfoRegistration} exact />
  <Route path="/userinfo/EmailAuth" component={EmailAuth} exact />
  <Route path="/wallet/walletMain" component={WalletMain} exact />
  <Route path="/wallet/IdentityVerification" component={IdentityVerification} exact />
  <Route path="/wallet/createWallet" component={CreateWallet} exact />
  <Route path="/wallet/loadWallet" component={LoadWallet} exact />
  <Route path="/wallet/FirstStep" component={FirstStep} exact />
  <Route path="/wallet/SecondStep" component={SecondStep} exact />
  <Route path="/wallet/ThirdStep" component={ThirdStep} exact />
  <Route path="/wallet/uploadWallet" component={UploadWallet} exact />
  <Route path="/wallet/completeCreation" component={CompleteCreation} exact />
  <Route path="/wallet/failAccess" component={FailAccess} exact />
  <Route path="/wallet/failAccess2" component={FailAccess2} exact />
  <Route path="/certificateMain" component={CertificateMain} exact />
  <Route path="/issureRegister" component={IssureRegister} exact />
  <Route path="/dashboard" component={Dashboard} exact />
  <Route path="/certificate/careerRegistration" component={CareerRegistration} exact />
  <Route path="/certificate/myCombination" component={MyCombination} exact />
  <Route path="/certificate/careerInstitution" component={CareerInstitution} exact />
  <Route path="/certificate/careerChoice" component={CareerChoice} exact />
  <Route path="/certificate/careerRequest" component={CareerRequest} exact />
  <Route path="/certificate/announcement" component={Announcement} exact />
  <Route path="/certificate/announcement2" component={Announcement2} exact />
  <Route path="/certificate/myChoice" component={MyChoice} exact />
  <Route path="/certificate/myPrintForm" component={MyPrintForm} exact />
  <Route path="/certificate/myTypeForm" component={MyTypeForm} exact />
  <Route path="/certificate/myIssueForm" component={MyIssueForm} exact />
  <Route path="/certificate/certificateResult" component={CertificateResult} exact />
  <Route path="/certificate/certificateResult2" component={CertificateResult2} exact />
>>>>>>> 0f8a6429f481749053d3a9988cb5093c79697d2e
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

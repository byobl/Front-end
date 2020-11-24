import React, { Component } from 'react';
import './signUp.css';
import stepimg from "./가입step1.svg";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';

class SignupTerms extends Component {
    render() {
        return (
            <div className="signup">
                <div className="sign-header">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p className="bold">Sillock</p></Link>
                    <div className="sign-head">
                        <p>sillock 계정 생성</p>
                        <p className="sign-title">회원가입하기</p>
                    </div>
                    <img src={stepimg} className="sign-stepimg"/>
                </div>
                <div className="sign-content">
                    <div>
                        {/*<Checkbox className="sign-btn"
                            defaultChecked
                            color = "default"
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                        />*/}
                        <p className="sign-txt2">실록 서비스 이용약관, 개인정보 수집 이용에 모두 동의합니다.</p>
                    </div>
                    <div>
                        <p className="txt"> • 실록 서비스 이용약관 동의</p>
                        <div className="Cer-form">
                        </div>
                        <p className="txt"> • 개인정보 수집 및 이용 동의</p>
                        <div className="Cer-form">
                        </div>
                    </div>
                </div>
                <div className="sign-Button">
                        <Link to="/userinfo/login" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="sign-subbtn">이전</Button></Link>
                        <Link to="/userinfo/infoRegistration" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="sign-subbtn2">다음</Button></Link>
                </div>
            </div>
            );
        }
    }
    
    export default SignupTerms;
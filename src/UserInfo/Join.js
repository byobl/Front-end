import React, { Component } from 'react';
import './signUp.css';
import stepimg from "./가입step3.svg";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Join extends Component {
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
                 {/* ---작은 화면일 때 ---*/}
                 <div className="sign-header2">
                        <p className="bold" ><Link to="/" style={{ textDecoration: 'none', 
                        color:'white',marginTop:'0'}}>Sillock</Link></p>
                    <div className="sign-head">
                        <p className="sign-title">회원가입완료</p>
                    </div>
                </div>
                <div className="sign-content3">
                    <div>
                        <p className="sign-title2">회원가입이 완료되었습니다.</p>
                        <p className="sign-txt2">로그인 하시면 실록 서비스를 정상적으로 이용하실 수 있습니다.</p>
                        <p className="sign-txt5">로그인 하시면 실록 서비스를<br/> 정상적으로 이용하실 수 있습니다.</p>
                    </div>
                </div>
                <div className="sign-Button">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary" id="sign-subbtn3">홈으로 이동</Button></Link>
                        <Link to="/userinfo/login" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary" id="sign-subbtn4">로그인</Button></Link>
                </div>
            </div>
            );
        }
    }
    
    export default Join;
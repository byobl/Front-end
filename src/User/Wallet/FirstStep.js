import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./wallet.css";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class FirstStep extends Component {
    render() {
        return (
            <div className="Wallet">
                 <div className="header1">
                    <p className="header2">STEP 1. 정보입력</p>
                </div>
                <div className="Step">
                    <p className="w-title">Step 1</p>
                    <hr className="line"></hr>
                    <p className="w-txt">정보입력</p>
                </div>
                <div className="Contents">
                    <div className="contentsName">
                        <p className="w-title2">새 지갑 만들기</p>
                        <p className="w-txt2">새 지갑의 이름과 비밀번호를 입력해주세요</p>
                    </div>
                    <div className="contents">
                        <div className="conlayout">
                            <form>
                                {/* <div className="layout2">
                                    <p className="w-txt3">지갑 이름</p>
                                    <TextField
                                    id="w-input"
                                    label="지갑 이름 입력"
                                    type="walletName"
                                    variant="outlined"
                                    />
                                </div> */}
                                <div className="layout2">
                                    <p className="w-txt3">지갑 비밀번호</p>
                                    <TextField
                                    id="w-input"
                                    label=" 영문,숫자,특수문자 혼용 8자 이상"
                                    type="walletPassword"
                                    variant="outlined"
                                    />
                                </div>
                                <div className="layout2">
                                    <p className="w-txt3">비밀번호 재입력</p>
                                    <TextField
                                    id="w-input"
                                    label="비밀번호 재확인"
                                    type="passwordCheck"
                                    variant="outlined"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="stepButton">
                        <form>
                        <Link to="/wallet/SecondStep"><Button id= "subbtn" type="submit" 
                        variant="contained" value="Confirmation" className="Confirmation">확인</Button></Link>             
                        </form>
                    </div>
                    </div>
                   
                </div>
            </div>
            );
        }
    }
    
    export default FirstStep;
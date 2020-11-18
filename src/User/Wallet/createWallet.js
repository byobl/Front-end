import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./wallet.css";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CreateWallet extends Component {
    render() {
        /*if 문 추가-> 최초 1회 인증 미완료 시 본인인증, 완료 시 생성 단계*/
        return (
            <div className="Wallet">
                <div className="Step">
                    <p className="w-title">본인인증</p>
                    <hr className="line"></hr>
                    <p className="w-txt">이메일 주소를 입력해 주세요</p>
                </div>
                <div className="Contents">
                    <div className="contentsName">
                        <p className="w-title2">이메일 주소(createWallet)</p>
                        <p className="w-txt2">원활한 Sillock 서비스 이용을 위해 최초 1회 인증이 필요합니다.</p>
                    </div>
                    <div className="contents">
                        <div className="conlayout">
                            <form>
                                <div className="layout">
                                    <TextField
                                    id="w-input"
                                    label="Email"
                                    type="Email"
                                    variant="outlined"
                                    />
                                    <Button id= "w-btn" variant="contained" className="EmailRequest">인증코드 받기</Button>
                                </div>
                                <div>
                                    <TextField
                                    id="w-input"
                                    label="Code"
                                    type="Code"
                                    variant="outlined"
                                    />
                                    <Button id= "w-btn" variant="contained" className="CodeCheck">인증확인</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="stepButton">
                        <form>
                        <Link to="/wallet/FirstStep"><Button id= "subbtn" type="submit" variant="contained" value="Confirmation" className="Confirmation">확인</Button></Link>                 
                        </form>
                    </div>
                </div>
            </div>
          );
    }
}    

export default CreateWallet;
import React, { Component } from 'react';
import "./wallet.css";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CreateWallet extends Component {
    render() {
        return (
            <div className="CreateWallet">
                <div className="Step">
                    <p className="title">본인인증</p>
                    <hr className="line"></hr>
                    <p className="txt">이메일 주소를 입력해 주세요</p>
                </div>
                <div className="Contents">
                    <div className="contentsName">
                        <p className="title2">이메일 주소</p>
                        <p className="txt2">원활한 Sillock 서비스 이용을 위해 최초 1회 인증이 필요합니다.</p>
                    </div>
                    <div className="contents">
                        <div className="conlayout">
                            <form>
                                <div className="layout">
                                    <TextField
                                    id="input"
                                    label="Email"
                                    type="Email"
                                    variant="outlined"
                                    />
                                    <Button id= "btn" type="submit" variant="contained" value="EmailRequest" className="EmailRequest">인증코드 받기</Button>
                                </div>
                                <div>
                                    <TextField
                                    id="input"
                                    label="Code"
                                    type="Code"
                                    variant="outlined"
                                    />
                                    <Button id= "btn" type="submit" variant="contained" value="CodeCheck" className="CodeCheck">인증확인</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="stepButton">
                        <form>
                            <Button id= "subbtn" type="submit" variant="contained" value="Confirmation" className="Confirmation">확인</Button>                 
                        </form>
                    </div>
                </div>
            </div>
          );
    }
}    
export default CreateWallet;
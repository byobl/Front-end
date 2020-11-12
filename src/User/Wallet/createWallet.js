import React, { Component } from 'react';
import "./wallet.css";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CreateWallet extends Component {
    render() {
        return (
            <div className="CreateWallet">
                <div className="Step">
                    <h1>
                        본인인증
                    </h1>
                    <p>이메일 주소를 입력해 주세요</p>
                </div>
                <div className="Contents">
                    <div className="contentsName">
                        <h2>
                            이메일 주소
                        </h2>
                        <h4>원활한 Sillock 서비스 이용을 위해 최초 1회 인증이 필요합니다.</h4>
                    </div>
                    <div className="contents">
                        <div>
                            <form>
                                <div>
                                    <TextField
                                    id="EmailAddress"
                                    label="Email"
                                    type="Email"
                                    variant="outlined"
                                    />
                                    <Button type="submit" variant="contained" value="EmailRequest" className="EmailRequest">인증코드 받기</Button>
                                </div>
                                <div>
                                    <TextField
                                    id="AuthenticationCode"
                                    label="Code"
                                    type="Code"
                                    variant="outlined"
                                    />
                                    <Button type="submit" variant="contained" value="CodeCheck" className="CodeCheck">인증확인</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="stepButton">
                        <form>
                            <Button type="submit" variant="contained" value="Confirmation" className="Confirmation">확인</Button>                 
                        </form>
                    </div>
                </div>
            </div>
          );
    }
}    
export default CreateWallet;
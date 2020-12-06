import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./wallet.css";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class UploadWallet extends Component {
    render() {
        /*if 문 추가-> 최초 1회 인증 미완료 시 본인인증, 완료 시 생성 단계*/
        return (
            <div className="Wallet">
                <div className="Step">
                    <p className="w-title">my 지갑</p>
                    <hr className="line"></hr>
                    <p className="w-txt">지갑 백업 파일 또는 개인키를<br></br>입력한 후에 사용할 수 있습니다.</p>
                </div>
                <div className="Contents">
                    <div className="contentsName">
                        <p className="w-title2">지갑 가져오기</p>
                        <p className="w-txt2">지갑 백업 파일을 업로드 해 주세요.</p>
                    </div>
                    <div className="contents">
                        <div className="conlayout">
                            <form>
                                <div className="layout3">
                                <p className="w-txt3">업로드 할 지갑 백업 파일 선택</p>
                                    <table>
                                        <tr>
                                            <td>
                                                <TextField
                                                id="w-input"
                                                label="Upload"
                                                type="upload"
                                                variant="outlined"
                                                /></td>
                                            <td><Button id= "w-btn" variant="contained" className="EmailRequest">업로드 하기</Button></td>
                                        </tr>
                                    </table>
                                    
                                    
                                </div>
                            </form>
                        </div>
                        <div className="stepButton">
                        <form>
                        <Link to="/wallet/failAccess"><Button id= "subbtn" type="submit" variant="contained" value="Confirmation" className="Confirmation">지갑찾기</Button></Link>                 
                        </form>
                    </div>
                    </div>
                    
                </div>
            </div>
          );
    }
}    
    
    export default UploadWallet;
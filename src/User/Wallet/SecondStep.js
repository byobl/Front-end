import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./wallet.css";

import Button from '@material-ui/core/Button';


class SecondStep extends Component {
    render() {
        return (
            <div className="Wallet">
                <div className="Step">
                    <p className="w-title">Step 2</p>
                    <hr className="line"></hr>
                    <p className="w-txt">지갑백업파일다운로드</p>
                </div>
                <div className="Contents">
                    <div className="contentsName">
                        <p className="w-title2">새 지갑 만들기</p>
                        <p className="w-txt2">키 생성 완료! 지갑 백업파일을 안전하게 보관하세요</p>
                    </div>
                    <div className="contents">
                        <div className="conlayout">
                            <form>
                            <Button id= "bigbtn" variant="contained" className="EmailRequest">지갑백업파일 다운로드</Button>                                
                            </form>
                        </div>
                    </div>
                    <div className="stepButton">
                        <tr>
                            <td><Link to="/wallet/FirstStep"><Button id= "subbtn2" type="submit" variant="contained" value="Confirmation" className="Confirmation">이전</Button></Link></td>
                            <td><Link to="/wallet/ThirdStep"><Button id= "subbtn3" type="submit" variant="contained" value="Confirmation" className="Confirmation">다음</Button></Link></td>                
                        </tr>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default SecondStep;
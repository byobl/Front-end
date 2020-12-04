import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./wallet.css";

import Button from '@material-ui/core/Button';


class ThirdStep extends Component {
    render() {
        return (
            <div className="Wallet">
                <div className="header1">
                    <p className="header2">STEP 3. 지갑생성</p>
                </div>
                <div className="Step">
                    <p className="w-title">Step 3</p>
                    <hr className="line"></hr>
                    <p className="w-txt">지갑등록</p>
                </div>
                <div className="Contents">
                    <div className="contentsName">
                        <p className="w-title2">새 지갑 만들기</p>
                        <p className="w-txt2">개인키를 안전한 곳에 보관하거나 적어두세요</p>
                    </div>
                    <div className="contents">
                        <div className="conlayout">
                            <form>
                            <Link to="/wallet/completeCreation"><Button id= "bigbtn" variant="contained" className="EmailRequest">내 정보를 안전하게 블록체인에 등록하기</Button></Link>                                          
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default ThirdStep;
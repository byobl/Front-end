import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './certificateResult.css';


class CertificateResult2 extends Component {
    render() {
        return (
            <div className="cerResult">
                <div className="cer-header">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p className="bold">Sillock</p></Link>
                    <div className="cer-head">
                        <p className="cer-title">인증서 발급이 완료되었습니다.</p>
                    </div>
                </div>
                <div className="cer-content">
                    <div>
                        <p className="cer-txt">• 고유코드(해시값) : </p>
                    </div>
                    <div>
                        <p className="cer-txt">• 실록인증파일</p>
                        <Button variant="contained" color="primary" id="cer-button2">파일 저장하기</Button>
                    </div>
                    <div>
                        <p className="cer-txt">• 문서 + QR코드</p>
                        <div className="cer-form">
                        </div>
                        <Button variant="contained" color="primary" id="cer-button2">프린트하기</Button>
                        <Button variant="contained" color="primary" id="cer-button2">파일 저장하기</Button>
                    </div>
                    <div>
                        <p className="cer-txt">• QR코드</p>
                        <p className="cer-txt2">QR코드는 내 마이페이지 및 실록 앱에서  재확인 가능합니다.</p>
                    </div>
                </div>
                <div className="mybuttons">
                <Link to="/" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="cer-button">확인</Button></Link>
                </div>
            </div>
            );
        }
    }
    
    export default CertificateResult2;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class CertificateResult extends Component {
    render() {
        return (
            <div>
                 <h1>인증서 생성결과 (CertificateResult) 화면입니다.</h1>
                 <p>인증서가 생성되었습니다.</p>
                <div>
                <Link to="/" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">홈으로</Button></Link>
                </div>
            </div>
            );
        }
    }
    
    export default CertificateResult;
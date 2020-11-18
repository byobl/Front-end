import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Join extends Component {
    render() {
        return (
            <div>
                <h1>Join.js 화면 입니다.</h1>
                <p>회원가입이 완료되었습니다.</p>
                <div className="buttons">
                 <Link to="/userinfo/infoRegistration" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                <Link to="/" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">홈으로 </Button></Link>
            </div>
            </div>
            );
        }
    }
    
    export default Join;
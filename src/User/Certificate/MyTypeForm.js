import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class MyTypeForm extends Component {
    render() {
        return (
            <div>
                 <h1>인증서양식 선택(MyTypeForm) 화면입니다.</h1>
                 <div className="buttons">
                 <Link to="/certificate/myPrintForm" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                <Link to="/certificate/myIssueForm" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">선택하기 </Button></Link>
            </div>
            </div>
            );
        }
    }
    
    export default MyTypeForm;
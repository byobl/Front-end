import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class MyIssueForm extends Component {
    render() {
        return (
            <div>
                 <h1>발행형식 선택(MyIssueForm) 화면입니다.</h1>
                 <div className="buttons">
                 <Link to="/certificate/myTypeForm" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                <Link to="/certificate/announcement" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">선택하기 </Button></Link>
            </div>
            </div>
            );
        }
    }
    export default MyIssueForm;
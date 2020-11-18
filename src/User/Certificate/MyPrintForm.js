import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class MyPrintForm extends Component {
    render() {
        return (
            <div>
                 <h1>출력항목 선택(MyPrintForm) 화면입니다.</h1>
                 <div className="buttons">
                 <Link to="/certificate/myChoice" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                <Link to="/certificate/myTypeForm" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">선택하기 </Button></Link>
            </div>

            </div>
            );
        }
    }
    
    export default MyPrintForm;
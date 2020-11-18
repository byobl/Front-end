import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class MyCombination extends Component {
    render() {
        return (
            <div>
                 <h1>나만의 증명서 조합하기(myCombination) 화면입니다.</h1>
                 <div className="buttons">
                <Link to="/certificateMain" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                <Link to="/certificate/myChoice" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">선택하기 </Button></Link>
            </div>
            </div>
            );
        }
    }
    
    export default MyCombination;
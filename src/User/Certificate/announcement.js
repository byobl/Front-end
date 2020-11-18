import React, { Component } from 'react';
import './announcement.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Announcement extends Component {
    render() {
        return (
            <div>
                <h1>증명요청 중 입니다.</h1>
                <p>최대 1분정도 소요될 수 있습니다.</p>
                <p>잠시만 기다려주세요.</p>
                <div className="buttons">
                 <Link to="/certificate/myIssueForm" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                <Link to="/certificate/certificateResult" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">선택하기 </Button></Link>
            </div>
            </div>
            );
        }
    }
export default Announcement;
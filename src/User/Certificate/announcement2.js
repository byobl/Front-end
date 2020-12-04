import React, { Component } from 'react';
import './announcement.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import stepimg from "./조합loading.svg";

{/*나만의 증명서 조합 - 생성 중*/}
class Announcement2 extends Component {
    render() {
        return (
            <div className="background2">
                <h1 className="loadMsg">인증서 생성 중</h1>
                <img src={stepimg} className="stepimg"/>
                <p className="loadMsg2">최대 1분정도 소요될 수 있습니다.<br></br>잠시만 기다려주세요.</p>
                <div className="buttons">
                 <Link to="/certificate/myIssueForm" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                <Link to="/certificate/certificateResult2" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss2">다음으로 </Button></Link>
            </div>
            </div>
            );
        }
    }
export default Announcement2;
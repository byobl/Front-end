import React, { Component } from 'react';
import './announcement.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import stepimg from "./이력loading.svg";

{/*내 이력 등록하기- 요청중*/}
class Announcement extends Component {
    render() {
        return (
            <div className="background">
                <h1 className="loadMsg">증명 요청 중</h1>
                <img src={stepimg} className="stepimg"/>
                <p className="loadMsg2">최대 1분정도 소요될 수 있습니다.<br></br>잠시만 기다려주세요.</p>
                <div className="buttons">
                 <Link to="/certificate/careerRequest" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                <Link to="/certificate/certificateResult" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">다음으로 </Button></Link>
            </div>
            </div>
            );
        }
    }
export default Announcement;
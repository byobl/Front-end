import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import stepimg from "./조합step2.svg";
import './myForm.css';


class MyPrintForm extends Component {
    render() {
        return (
            <div className="MYcareer">
                <div className="MYheader">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p className="bold">Sillock</p></Link>
                    <div className="MYhead">
                        <p>자격발급페이지</p>
                        <p className="MYtitle">나만의 인증서 조합하기</p>
                    </div>
                    <img src={stepimg} className="stepimg"/>
                </div>
                <div className="my-content2">
                    <div>
                        <p className="MYtitle2">출력 항목 선택</p>
                        <p className="MYtxt2">Step 1/3. 생성할 인증서에 출력할 항목을 선택해주세요<br></br><p className="MYtxt3">(중복 선택 가능)</p></p>
                    </div>
                    <div>
                        <div className="my-form">
                        </div>
                    </div>
                </div>
                <div className="mybuttons">
                <Link to="/certificate/myChoice" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="MYbuttonsss">이전으로 </Button></Link>
                <Link to="/certificate/myTypeForm" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="MYbuttonss">선택하기 </Button></Link>
                </div>
            </div>
            );
        }
    }
    
    export default MyPrintForm;
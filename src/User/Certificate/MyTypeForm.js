import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import stepimg from "./조합step2.svg";
import './myForm.css';


class MyTypeForm extends Component {
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
                        <p className="MYtitle2">인증 양식 선택</p>
                        <p className="MYtxt2">Step 2/3. 인증서의 디자인을 선택해주세요<br></br><p className="MYtxt3">(클릭하면 크게 볼 수 있습니다)</p></p>
                    </div>
                    <div>
                        <div className="my-form">
                        </div>
                    </div>
                </div>
                <div className="mybuttons">
                    <Link to="/certificate/myPrintForm" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="MYbuttonsss">이전으로 </Button></Link>
                    <Link to="/certificate/myIssueForm" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="MYbuttonss">선택하기 </Button></Link>
                </div>
            </div>
            );
        }
    }
    
    export default MyTypeForm;
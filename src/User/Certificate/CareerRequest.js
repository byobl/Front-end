import React, { Component } from 'react';
import './carrer.css';
import stepimg from "./이력step3.svg";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class CareerRequest extends Component {
    render() {
        return (
            <div>
<div className="career">
                <div className="header">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p className="bold">Sillock</p></Link>
                    <div className="head">
                        <p>내 조각정보 등록</p>
                        <p className="title">내 이력 등록하기</p>
                    </div>
                    <img src={stepimg} className="stepimg"/>
                </div>
                <div className="content">
                    <div>
                        <p className="title2">증명요청</p>
                        <p className="txt">선택하신 발행기관으로 내 이력 증명을 요청하시겠습니까?</p>
                    </div>
                </div>
                </div>
                <div className="buttons">
                <Link to="/certificate/careerInstitution" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                <Link to="/" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">선택하기 </Button></Link></div>
            </div>
            );
        }
    }
    
    export default CareerRequest;
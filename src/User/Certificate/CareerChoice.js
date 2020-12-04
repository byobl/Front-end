import React, { Component } from 'react';
import './carrer.css';
import stepimg from "./이력step2.svg";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class CareerChoice extends Component {
    render() {
        return (
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
                <div className="car-content2">
                    <div>
                        <p className="title2">이력선택</p>
                        <p className="txt2">해당 발행기관에서 뵤블님이 요청하실 이력들을 선택해주세요.</p>
                    </div>
                    <div>
                        <p className="txt"> • 선택한 발행기관 목록</p>
                        <div className="Cer-form">
                        </div>
                        <p className="txt"> • 선택한 발행기관 1) : Kitri BoB 센터</p>
                        <div className="Cer-form">
                        </div>
                        <p className="txt"> • 선택한 발행기관 2) : 중앙대학교</p>
                        <div className="Cer-form">
                        </div>
                    </div>
                </div>
                <div className="buttons">
                <Link to="/certificate/careerInstitution" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                <Link to="/certificate/careerRequest" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">선택하기 </Button></Link>
                </div>
            </div>
            );
        }
    }
    
    export default CareerChoice;
import React, { Component } from 'react';
import './carrer.css';
import stepimg from "./이력step1.svg";
import { Link } from 'react-router-dom';
class CareerRegistration extends Component {
    render() {
        return (
            <div>
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
                        <p className="title2">기관검색</p>
                        <p className="txt">증명서 발급을 원하시는 학교 혹은 기관명을 먼저 검색해주세요.</p>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default CareerRegistration;
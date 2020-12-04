import React, { Component } from 'react';
import './carrer.css';
import stepimg from "./이력step1.svg";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {DataGrid} from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

const columns = [
    { field: 'id', headerName: '기관코드', width: 100 },
    { field: 'firstName', headerName: '기관명', width: 330 }
  ];
  
  const rows = [
    { id: 1, firstName: 'BoB - 차세대 보안리더 양성프로그램'},
    { id: 2, firstName: '중앙대학교'},
    { id: 3, firstName: '아주대학교'},
    { id: 4, firstName: '대진대학교'},
    { id: 5, firstName: '영산대학교'},
    { id: 6, firstName: '호서대학교'},
    { id: 8, firstName: '교육기관'},
    { id: 9, firstName: '교육기관'},
    { id: 10, firstName: '교육기관'},
  ];


class CareerInstitution extends Component {
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
                <div className="car-content">
                    <div>
                        <p className="title2">기관검색</p>
                        <p className="txt2">증명서 발급을 원하시는 학교 혹은 기관명을 먼저 검색해주세요.</p>
                    </div>
                    <form>
                        <TextField
                        id="outlined-secondary"
                        label="발급을 원하는 학교/기관명"
                        variant="outlined"
                        color="secondary"
                        />
                    <input type="submit" value="검색" className="submit"></input>
                    </form>
                    <div></div>
                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                </div>
                <div className="buttons"><Link to="/certificateMain" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                <Link to="/certificate/careerChoice" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">선택하기 </Button></Link>
                </div>
            </div>
            );
        }
    }
    
    export default CareerInstitution;
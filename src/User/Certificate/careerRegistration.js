import React, { Component } from 'react';
import './carrer.css';
import stepimg from "./이력step1.svg";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {DataGrid} from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: '번호', width: 100 },
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
                    <form>
                        <TextField
                        id="outlined-secondary"
                        label="발급을 원하는 학교/기관명"
                        variant="outlined"
                        color="secondary"
                        />
                    <input type="submit" value="검색" className="submit"></input>
                    </form>
                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                    
                </div>
            </div>
            );
        }
    }
    
    export default CareerRegistration;
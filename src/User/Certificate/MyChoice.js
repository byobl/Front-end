
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import stepimg from "./조합step1.svg";
import {DataGrid} from '@material-ui/data-grid';
import './myForm.css';

const columns = [
    { field: 'id', headerName: '번호', width: 100 },
    { field: 'firstName', headerName: '이력명', width: 330 }
  ];
  
  const rows = [
    { id: 1, firstName: 'Kitri BoB 9기 수료'},
    { id: 2, firstName: '컴퓨터활용능력 2급 취득'},
    { id: 3, firstName: '재학증명'},
    { id: 4, firstName: '졸업이수학점'},
    { id: 5, firstName: '정보보안기사'},
  ];
class MyChoice extends Component {
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
                <div className="my-content">
                    <div>
                        <p className="MYtitle2">이력 선택</p>
                        <p className="MYtxt2">생성할 인증서에 넣을 뵤블님의 이력들을 선택해주세요</p>
                    </div>
                    <div>
                        <p className="MYtxt"> • 나의 개인정보</p>
                        <div className="my-form">
                        </div>
                    </div>
                    <div>
                        <p className="MYtxt"> • 나의 이력사항</p>
                        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                    </div>
                </div>
                <div className="mybuttons">
                <Link to="/certificateMain" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="MYbuttonsss">이전으로 </Button></Link>
                <Link to="/certificate/myPrintForm" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="MYbuttonss">선택하기 </Button></Link>
                </div>
            </div>
            );
        }
    }
    
    export default MyChoice;
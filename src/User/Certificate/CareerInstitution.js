import React, { Component } from 'react';
import './carrer.css';
import stepimg from "./이력step1.svg";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
// import {DataGrid} from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Form } from 'react-bootstrap';
const columns = [
    { field: 'id', headerName: '기관코드', width: 100 },
    { field: 'firstName', headerName: '기관명', width: 330 }
  ];
  
//   const rows = [
//     { id: 1, firstName: 'BoB - 차세대 보안리더 양성프로그램'},
//     { id: 2, firstName: '중앙대학교'},
//     { id: 3, firstName: '아주대학교'},
//     { id: 4, firstName: '대진대학교'},
//     { id: 5, firstName: '영산대학교'},
//     { id: 6, firstName: '호서대학교'},
//     { id: 8, firstName: '교육기관'},
//     { id: 9, firstName: '교육기관'},
//     { id: 10, firstName: '교육기관'},
//   ];


class CareerInstitution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : ['1 ','2 ','3 '],
            name : []
        };
    }

    GetISSUER(){
        var ret;
        var status;
        var object;
        var ISSUERAry = new Array();
        axios.get('http://35.232.159.201:3000/api/wallet/vc',{
                headers: {
                'x-access-token': localStorage.getItem('jwt')
                }
            })
            .then(function (response) {
                ret = response;
                status = ret.status;
                object = JSON.parse(ret.request.response);
                console.log("전송결과 : "+ret.statusText);
                console.log(status);
                // console.log(ret.request.response);
                // console.log(object[0].name);
                //currentAry : 배열 내 현재 인증기관 배열 / index : 배열 내 현재 값의 인덱스 / array : 현재 배열 
                    object.forEach(function(currentAry, index, array){
                        var Id = index+1;
                        var FirstName = currentAry.name;
                        var obj = {
                            id : Id,
                            firstName : FirstName
                        }
                        ISSUERAry[index]= obj;
                     })
                    //  console.log(ISSUERAry);
                    // if(localStorage.getItem('Issuers') !== null){
                    //     window.localStorage.removeItem('Issuers');
                    //     window.localStorage.setItem('Issuers',ISSUERAry);
                    // }else{
                    //     window.localStorage.setItem('Issuers',ISSUERAry);
                    // }
                    
                    //  return ISSUERAry;
                    //  console.log(this.state.rows);
                    // this.setState({ rows: ISSUERAry});
                    // console.log("ISSUERAry : "+ this.state.rows);
            })            
            .catch(function (error) {
                ret = error.response;
                console.log("error : "+ret);
            });
        }

        printISSURE(){
            var rows = localStorage.getItem('Issuers');
        }

    render() {
        // var rows = Promise.resolve(this.GetISSUER());
        // rows.then((value) => {
        //     console.log(value);
        //     // expected output: 123
        //   });
        // // console.log("rows : "+this.GetISSUER());
        var rows = localStorage.getItem('Issuers');
        // rows = rows.split(",");
        // var result = JSON.parse(rows);
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
                    <input type="submit" value="검색" className="submit" ></input>
                    </form>
                    <div>
                        
                    <Button variant="contained" color="primary" onClick={(e) =>{this.GetISSUER()}} id="buttonsss"> 검사용 </Button>
                                <div> -- 서버에서 온 값 : "{}" </div> 
                    </div><br/><br/>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label className="em-2">기관 리스트</Form.Label>
                        <Form.Control as="select" multiple>
                        <option>{}</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    {/* <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection /> */}
                </div>
                <div className="buttons"><Link to="/certificateMain" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                <Link to="/certificate/careerChoice" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">선택하기 </Button></Link>
                </div>
            </div>
            );
        }
    }
    
    export default CareerInstitution;
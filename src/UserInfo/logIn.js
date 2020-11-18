import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./login.css";
import axios from 'axios';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : "아직 응답이 없습니다",
            userId: "",
            password:""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        console.log("target : "+target);
        const value = target.value;
        console.log("target.value : "+value);
        const name = target.name;
        console.log("target.name : "+name);

        this.setState({
            [name]: value
          });
      }


    async onClickBtn(){ 
        var ret;
        await axios.post('http://35.232.159.201:3000/api/auth/login',
        {
            "userId": this.state.userId,
            "password": this.state.password
          })
          .then(function (response) {
            ret = response.data;
            console.log(ret.message);
            console.log(ret);
        })
        .catch(function (error) {
            ret = error.response;
            console.log(ret);
            ret = ret.data;
            console.log(ret);
            alert("Error");
            //에러 페이지 세분화
        });

        this.setState({ message: ret.message});
      }

    render() {
        return (
            <div className="LogIn">
                <div className="box1">
                    <div className="Logindex">
                    <h1>나만의 증명서,</h1>
                    <h1>내 손 안의 증명서</h1>
                    <p>Sillock 계정으로 간편하고 편리하게 관리해보세요!</p>
                    </div>
                </div>
                <div className="box2">
                    <form className="form">
                        <h1 className="formtitle">Sillock</h1>
                        <div>
                        <TextField
                            id="inputlogin"
                            label="Id"
                            type="id"
                            placeholder="아이디" required
                            onChange={this.handleChange}
                            name="userId"
                        />
                        </div>
                        <div>
                        <TextField
                            id="inputlogin"
                            label="Password"
                            type="password"
                            placeholder="비밀번호" required
                            onChange={this.handleChange}
                            name="password"

                        />
                        </div>
                        <div>
                            <Button id="checkbtn" variant="contained" className="UserCheck" onClick={(e) => { this.onClickBtn() }}>로그인</Button>
                        </div>
                        <div>
                            <Link to="/userinfo/signup"><Button>회원가입</Button></Link>
                            <Link to="/userinfo/signup"><Button id="btn-style">실록계정</Button></Link>
                            <Link to="/userinfo/signup"><Button>비밀번호 찾기</Button></Link>
                        </div>
                        <div> -- 서버에서 온 값 : "{this.state.message}" </div>
                    </form>
                </div>
            </div>
            );
        }
    }

    export default LogIn;
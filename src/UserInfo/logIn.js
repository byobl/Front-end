import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./login.css";
import axios from 'axios';
// import store from '../store';

// const accessToken;

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
            var accessToken = ret.token;
            console.log("토큰"+accessToken);
            // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        })
        .catch(function (error) {
            ret = error.response;
            console.log(ret);
            ret = ret.data;
            console.log(ret);
            alert("Error");
            //에러 페이지 세분화
            //회원가입 x.
            //올바른 로그인 정보를 입력해주세요.
        });

        this.setState({ message: ret.token});
      }




    render() {
        return (
            <div>
                <div className="LogIn">
                    {/* <div className="box1">
                    </div> */}
                    <div className="box2">
                        <form>
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
                                <Button id="checkbtn" variant="contained" className="UserCheck" onClick={(e) => { this.onClickBtn() }}>확인</Button>
                            </div>
                            <div> -- 서버에서 온 토큰값 : "{this.state.message}" </div>
                        </form>
                    </div>
                </div>
                <div className="buttons">
                <Link to="/" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
            <Link to="/userinfo/signup" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">선택하기 </Button></Link>

                </div>
            </div>
            );
        }
    }

    export default LogIn;
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
            console.log(ret.message);
            console.log(ret);

            var accessToken = ret.token;
            localStorage.setItem('jwt', accessToken);
            console.log("토큰"+localStorage.getItem('jwt'));
            // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            
        })
        .catch(function (error) {
            ret = error.response;
            console.log(ret);
            ret = ret.data;
            console.log(ret);
            alert("올바른 로그인 정보를 입력해주세요.");
            //에러 페이지 세분화
            //회원가입 x.
            //올바른 로그인 정보를 입력해주세요.
        });
        this.setState({ message: ret.message});
        if(this.state.message == null){alert("로그인 성공"); this.props.history.push("/");}
      }


      async onClickBtn2(){ 
        var ret;
        await axios.get('http://35.232.159.201:3000/api/auth/check',{
            headers: {
              'x-access-token': localStorage.getItem('jwt')
            }
        })
          .then(function (response) {
            ret = response;
            console.log("전송결과 : "+ret.statusText);
        })
        .catch(function (error) {
            ret = error.response;
            console.log(ret);
            ret = ret.data;
            console.log(ret);
            alert("에러발생. 다시 시도해주십시오.");
            //에러 페이지 세분화
            //회원가입 x.
            //올바른 로그인 정보를 입력해주세요.
        });

        this.setState({ message: ret.message});
        // if(this.state.message == null){alert("로그인 성공"); this.props.history.push("/");}
      }

    render() {
        return (
            <div className="LogIn">
                <div className="box1">
                    <div className="Logindex">
                    <h1>나만의 증명서,</h1>
                    <h1>내 손 안의 증명서</h1>
                    <p>Sillock 계정으로 간편하고<br/> 편리하게 관리해보세요!</p>
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
                            <Button id="checkbtn" variant="contained" className="UserCheck" onClick={(e) => { this.onClickBtn2() }}>확인용버튼</Button>
                        </div>
                        <div id="links">
                            <Link to="/userinfo/signupTerms"><Button>회원가입</Button></Link>
                            <Link to="/userinfo/signupTerms"><Button >실록계정</Button></Link>
                            <Link to="/userinfo/signupTerms"><Button>비밀번호 찾기</Button></Link>
                        </div>
                        <div> -- 서버에서 온 값 : "{this.state.message}" </div>
                    </form>
                </div>
            </div>
            );
        }
    }

    export default LogIn;
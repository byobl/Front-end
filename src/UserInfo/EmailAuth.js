import React, { Component } from 'react';
import "./signUp.css"
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EmailAuth extends Component {


    constructor(props) {
        super(props);
        this.state = {
            message : "아직 응답이 없습니다",
            userId: "",
            password:"",
            email: ""
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
    await axios.post('http://35.232.159.201:3000/api/auth/verify',
    {
        "userId": this.state.userId,
        "password": this.state.password,
        "email": this.state.email
    })
        .then(function (response) {
        ret = response.data;
        console.log("ret.message : "+ret.msg);
        console.log("ret : "+ret);
        alert("이메일이 전송되었습니다. 링크를 확인해주세요");
    })
    .catch(function (error) {
        ret = error.response;
        ret = ret.data;
        console.log(ret);
        console.log("error ret : "+ret.msg);
        alert("Error");
        //에러 페이지 세분화
    });

    this.setState({ message: ret.msg});
    }

    render() {
        return (
            <div>
                <div className="signup">
                    <div className="header">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <p className="bold">Sillock</p></Link>
                        <div className="head">
                            <p>sillock 계정 생성</p>
                            <p className="etitle">이메일 인증</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p className="title2">기관검색</p>
                            <p className="txt">증명서 발급을 원하시는 학교 혹은 기관명을 먼저 검색해주세요.</p>
                        </div>
                        <div>
                            <form >
                                <label># 아이디 <input type="text" name="userId" 
                                    onChange={this.handleChange} placeholder="이름" required></input></label><br/><br/>
                                                {/* <Button variant="contained" color="primary">중복확인</Button> */}
                                <label>#  비밀번호 <input type="password" name="password" placeholder="비밀번호"
                                    onChange={this.handleChange} required></input></label><br/><br/>
                                <label>#   이메일 <input type="text" name="email" onChange={this.handleChange} 
                                    placeholder="Email"  required></input><select name="items1">
                                                                                <option value="naver.com">@naver.com</option>
                                                                                <option value="google.com">@google.com</option>
                                                                                <option value="daum.com">@daum.com</option>
                                                                            </select></label>
                            </form><br/><br/>
                            <Button variant="contained"  onClick={(e) => { this.onClickBtn() }}>확인</Button><br/><br/>     
                        
                        -- 서버에서 온 값 : "{this.state.message}" 
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default EmailAuth;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./wallet.css";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class IdentityVerification extends Component {
    /*if 문 추가-> 인증 실패시 fail 컴포넌트 */
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
        // console.log("target : "+target);
        const value = target.value;
        // console.log("target.value : "+value);
        const name = target.name;
        // console.log("target.name : "+name);

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
            alert("이메일이 전송되었습니다. 링크를 확인해주세요");
        })
        .catch(function (error) {
            ret = error.response;
            ret = ret.data;
            alert("Error");
        });
        this.setState({ message: ret.msg});
        }

        // 이메일 인증은 어떻게 토큰을 가져오지??
        // function Getjwt(){
        //     var ret;
        //     var status;
        //     axios.get('http://35.232.159.201:3000/api/auth/verify/{token},{
        //               headers: {
        //                 'x-access-token': localStorage.getItem('jwt')
        //               }
        //           })
        //             .then(function (response) {
        //               ret = response;
        //               status = ret.status;
        //               console.log("전송결과 : "+ret.statusText);
        //               // console.log(status);
        //               localStorage.setItem('status', status);
        //           })
        //           .catch(function (error) {
        //               ret = error.response;
        //               // console.log(ret);
        //               status = ret.status;
        //               localStorage.setItem('status', status);
        //           });
        // }






    render() {
        return (
            <div className="Wallet">
                <div className="header1">
                    <p className="header2">SILLOCK</p>
                </div>
                <div className="Step">
                    <p className="w-title">본인인증</p>
                    <hr className="line"></hr>
                    <p className="w-txt">이메일 주소를 입력해 주세요</p>
                </div>
                <div className="Contents">
                    <div className="contentsName">
                        <p className="w-title2">이메일 본인인증</p>
                        <p className="w-txt2">원활한 Sillock 서비스 이용을 위해 최초 1회 인증이 필요합니다.</p>
                    </div>
                    <div className="contents">
                        <div className="conlayout">
                            <form>
                                <div className="layout">
                                    <TextField
                                    id="w-input"
                                    label="ID"
                                    name="userId"
                                    type="text"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    placeholder="아이디"
                                    required
                                    />
                                </div>
                                <div>
                                    <TextField
                                    id="w-input"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    placeholder="비밀번호"
                                    required
                                    />
                                </div>
                                <div className="layout">
                                    <TextField
                                    id="w-input"
                                    label="Email"
                                    name="email"
                                    type="email"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    placeholder="이메일"
                                    required
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="stepButton">
                        <form>
                        <Button id= "subbtn" type="submit" variant="contained" onClick={(e) => { this.onClickBtn() }}>인증코드 받기</Button>           
                        </form>
                        {/*-- 서버에서 온 값 : "{this.state.message}"*/}
                    </div>
                    </div>
                    
                </div>
            </div>
          );
    }
}
export default IdentityVerification;
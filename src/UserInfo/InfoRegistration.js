import React, { Component } from 'react';
import "./signUp.css"
import stepimg from "./가입step2.svg";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// // 비밀번호 두번 입력 동일한지 확인하는 함수
// function comparePwd(){
//       if( this.state.pwd1 != this.state.pwd2 ){
//       console.log("비밀번호 불일치");
//       return false;
//     } else{
//       console.log("비밀번호가 일치합니다");
//       return true;
//     }
// }

class InfoRegistration extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            message : "아직 응답이 없습니다",
            name: "",
            pwd1: 0,
            pwd2: 1,
            email: "",
            // user:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.comparePwd = this.comparePwd.bind(this);
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

      comparePwd(){
      if( this.state.pwd1 !== this.state.pwd2 ){
              console.log("비밀번호 불일치");
              return false;
            } else{
              console.log("비밀번호가 일치합니다");
              return true;
            }
        }

    async onClickBtn(){ 
        var ret;
        const compare = this.comparePwd();
        if(compare === true ){ // 비밀번호가 일치하면
            await axios.post('http://35.232.159.201:3000/api/auth/register',
            {
                "name": this.state.name,
                "userId": this.state.email,
                "password": this.state.pwd1
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
                alert("이미 존재하는 유저입니다.");
            });
    
            this.setState({ message: ret.message});
            if(this.state.message ==="Registered"){this.props.history.push("/wallet/IdentityVerification");}
        }
        else{ //아니면
            alert("입력된 두 비밀번호가 다릅니다. 다시 확인해주세요");
        }
        
            
      }

    render() {
        return (
            <div className="signup">
                 {/* ---큰 화면일 때 ---*/}
                <div className="sign-header">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p className="bold">Sillock</p></Link>
                    <div className="sign-head">
                        <p>sillock 계정 생성</p>
                        <p className="sign-title">회원가입하기</p>
                    </div>
                    <img src={stepimg} className="sign-stepimg"/>
                </div>
                 {/* ---작은 화면일 때 ---*/}
                 <div className="sign-header2">
                        <p className="bold" ><Link to="/" style={{ textDecoration: 'none', 
                        color:'white',marginTop:'0'}}>Sillock</Link></p>
                    <div className="sign-head">
                        <p className="sign-title">sillock 계정 생성</p>
                    </div>
                </div>
                <div className="sign-content2">
                    <div>
                        <p className="sign-txt">사용자 정보</p>
                    </div>
                    <form >
                        <div className="i-layout">
                            <TextField
                            id="i-input"
                            label="Name"
                            name="name"
                            type="text"
                            variant="outlined"
                            onChange={this.handleChange}
                            placeholder="이름"
                            required
                            />
                        </div>
                        <div className="i-layout2">
                            <TextField
                            id="i-input"
                            label="Password"
                            name="pwd1"
                            type="password"
                            variant="outlined"
                            onChange={this.handleChange}
                            placeholder="비밀번호"
                            required
                            />
                        </div>
                        <div className="i-layout2">
                            <TextField
                            id="i-input"
                            label="Password Checks"
                            name="pwd2"
                            type="password"
                            variant="outlined"
                            onChange={this.handleChange}
                            placeholder="비밀번호 확인"
                            required
                            />
                        </div>
                        <div className="i-layout2">
                            <TextField
                            id="i-input"
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
                    <div className="buttonss">
                            <Link to="/userinfo/signupTerms" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="primary" id="sign-subbtn">이전</Button></Link>
                            <Button variant="contained" color="primary" id="sign-subbtn2" 
                            onClick={(e) => { this.onClickBtn() }}>확인</Button>
                    </div>
                    
                </div>
                
            </div>
            );
        }
    }
    
    export default InfoRegistration;


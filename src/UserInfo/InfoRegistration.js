import React, { Component } from 'react';
import "./signUp.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
      if( this.state.pwd1 != this.state.pwd2 ){
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
        if(compare == true ){ // 비밀번호가 일치하면
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
        }
        else{ //아니면
            alert("입력된 두 비밀번호가 다릅니다. 다시 확인해주세요");
        }
        
            
      }

    render() {
        return (
            <div>
                <h1>회원가입하기(InfoRegistration) 입니다.</h1><br/><br/>
                <form >
                    <label># 이름 <input type="text" name="name" 
                        onChange={this.handleChange} placeholder="이름" required></input></label><br/><br/>
                                    {/* <Button variant="contained" color="primary">중복확인</Button> */}
                    <label>#  비밀번호 <input type="password" name="pwd1" placeholder="비밀번호"
                        onChange={this.handleChange} required></input></label><br/><br/>
                    <label>#   비밀번호 확인 <input type="password" name="pwd2" 
                        placeholder="비밀번호" onChange={this.handleChange} required></input></label><br/><br/>
                    <label>#   이메일 <input type="text" name="email" onChange={this.handleChange} 
                        placeholder="Email"  required></input><select name="items1">
                                                                    <option value="naver.com">@naver.com</option>
                                                                    <option value="google.com">@google.com</option>
                                                                    <option value="daum.com">@daum.com</option>
                                                                </select></label>
                    {/* <input type="submit" value="회원가입하기" className="info"></input>  */}
                </form><br/><br/>
                <div> 
               
                <button className='button' onClick={(e) => { this.onClickBtn() }}> 회원가입 정보 보내기 버튼</button> <br/>
                -- 서버에서 온 값 : "{this.state.message}" 
                </div>
                <div className="buttons">
                 <Link to="/certificate/signup" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                <Link to="/userinfo/Join" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonss">선택하기 </Button></Link>
            </div>
            </div>
            );
        }
    }
    
    export default InfoRegistration;


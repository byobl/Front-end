import React, { Component } from 'react';
import "./signUp.css"
import axios from 'axios';


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
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.user);
        event.preventDefault();
      }


      
    // state = {
    //     message : "아직 응답이 없습니다"
    // };

    async onClickBtn(){ 
        var ret;
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
            console.log(this.state.name);
            alert("이미 존재하는 유저입니다.");
        });

        this.setState({ message: ret.message});
            
      }

    render() {
        return (
            <div >
                <h1>회원가입하기(InfoRegistration) 입니다.</h1><br/><br/>
                <form onSubmit={this.handleSubmit}>
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
                
            </div>
            );
        }
    }
    
    export default InfoRegistration;


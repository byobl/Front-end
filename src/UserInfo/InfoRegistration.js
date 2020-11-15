import React, { Component } from 'react';
import "./signUp.css"
import axios from 'axios';

class InfoRegistration extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
    // //   handleSubmit(e) {
    // //     e.preventDefault();
    // //     var pw1 = document.getElementById( 'pw1' ).value;
    // //     var pw2 = document.getElementById( 'pw2' ).value;
    // //     var name = document.getElementById( 'name' ).value;
    // //         console.log(pw1);
    // //     }
        
     

    state = {
        message : "아직 응답이 없습니다"
    };

    async onClickBtn(){ 
        var ret;
        await axios.post('http://35.232.159.201:3000/api/auth/register',
        {
            "name": "한승둡이두밥",
            "userId": "하나ededd@byoble.com",
            "password": "passwosdrd"
          })
          .then(function (response) {
            ret = response.data;
            console.log(ret.message);
        })
        .catch(function (error) {
            ret = error.response;
            ret = ret.data;
            console.log(ret);
            alert("Error");
        });

        this.setState({ message: ret.message});
            
      }
    render() {
        return (
            <div >
                <h1>회원가입하기(InfoRegistration) 입니다.</h1><br/><br/>
                <form onSubmit={this.handleSubmit}>
                    <label># 이름 <input type="text" name="name" id="name" placeholder="이름" required></input></label><br/><br/>
                                    {/* <Button variant="contained" color="primary">중복확인</Button> */}
                    <label>#  비밀번호 <input type="password" name="pwd1" placeholder="비밀번호" required></input></label><br/><br/>
                    <label>#   비밀번호 확인 <input type="password" name="pwd2" placeholder="비밀번호" required></input></label><br/><br/>
                    <label>#   이메일 <input type="text" name="email" placeholder="Email" required></input><select name="items1">
                                                                    <option value="naver">@naver.com</option>
                                                                    <option value="google">@google.com</option>
                                                                    <option value="daum">@daum.com</option>
                                                                </select></label>
                    {/* <input type="submit" value="회원가입하기" className="info"></input>  */}
                </form><br/><br/>
                <button className='button' onClick={(e) => { this.onClickBtn() }}> 회원가입 정보 보내기 버튼</button>
                <div> -- 서버에서 온 값 : "{this.state.message}" </div>
                
            </div>
            );
        }
    }
    
    export default InfoRegistration;


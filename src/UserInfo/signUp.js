import React, { Component } from 'react';
import "./signUp.css";
import axios from 'axios';


class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            message : ""
        };
        
    }


    async onClickBtn(){ 
        var ret;
        await axios.post('http://35.232.159.201:3000/api/auth/register',{
            "name": "한승ddd",
            "userId": "집에가고싶다sds@byoble.com",
            "password": "passwosdrd"
          })
            .then(function (response) {
                ret = response.data;
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

            this.setState({ message: ret});
      }
        

    render() {
        return (
            
            <div  className="tt">
                <h2>회원가입(/userinfo/signup) 입니다.</h2><br/><br/>
                <button className='button' onClick={(e) => { this.onClickBtn() }}> 보내기 </button>
                <div> 서버에서 온 값 :{this.state.message} </div>
                <form method="post">
                    <div>
                        <label>
                            <input type="checkbox" name="check[]" value="yyy"></input>
                            실록 서비스 이용약관, 개인정보 수집 이용에 모두 동의합니다.
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="check[]" value="yyy"></input>
                            실록 서비스 이용약관 동의
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="check[]" value="yyy"></input>
                            개인정보 수집 및 이용 동의
                        </label>
                    </div>
                    <p><input type="submit" value="다음"></input></p>
                </form>
            </div>
            );
        }
    }

    
    
    export default SignUp;
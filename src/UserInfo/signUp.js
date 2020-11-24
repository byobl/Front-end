import React, { Component } from 'react';
import "./signUp.css";
import { Link } from 'react-router-dom';

{/*임시 회원가입 - 동의 페이지*/}
class SignUp extends Component {
    
    render() {
        return (
            <div  className="tt">
                <h2>회원가입(/userinfo/signup) 입니다.</h2><br/><br/>

                
               
                <form method="post">
                    <div>
                        <label>
                            <input type="checkbox" name="check[]" value="yyy" required></input>
                            실록 서비스 이용약관, 개인정보 수집 이용에 모두 동의합니다.
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="check[]" value="yyy" required></input>
                            실록 서비스 이용약관 동의
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="check[]" value="yyy" required></input>
                            개인정보 수집 및 이용 동의
                        </label>
                    </div>
                    <p><Link to="/userinfo/login" style={{ textDecoration: 'none' }}><input type="button" value="이전"></input></Link></p>
                    <p><Link to="/userinfo/infoRegistration" style={{ textDecoration: 'none' }}><input type="submit" value="다음"></input></Link></p>
                </form>
            </div>
            );
        }
    }

    
    
    export default SignUp;
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import "./signUp.css"

class InfoRegistration extends Component {

    comparePwd(_pwd1,_pwd2){
        var pwd1 = _pwd1;
        var pwd2 = _pwd2;
        if(pwd1 === pwd2) return true;
        else return false;
    }


    render() {
        var result = this.comparePwd();

        return (
            <div >
                <h1>회원가입하기(InfoRegistration) 입니다.</h1>
                <form>
                    <table>
                        <tr>
                            <td>이름</td>
                            <td><input type="text" name="name" id="name"></input>
                                {/* <Button variant="contained" color="primary">중복확인</Button> */}</td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type="password" name="pwd1"></input></td>
                        </tr>
                        <tr>
                            <td>비밀번호 확인</td>
                            <td><input type="password" name="pwd2"></input></td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td><input type="text" name="email"></input><select name="items1">
                                                                    <option value="naver">@naver.com</option>
                                                                    <option value="google">@google.com</option>
                                                                    <option value="daum">@daum.com</option>
                                                                </select>
                            </td>
                        </tr>
                    </table> 
                    <input type="submit" value="회원가입하기" className="info"></input> 
                </form>
            </div>
            );
        }
    }
    
    export default InfoRegistration;


import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./login.css";
import axios from 'axios';

class LogIn extends Component {
    state = {
        message : "아직 응답이 없습니다"
    };
    async onClickBtn(){ 
        var ret;
        await axios.post('http://35.232.159.201:3000/api/auth/login',
        {
            "userId": "집에가고싶다@byoble.com",
            "password": "password"
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
    /*
    LoginInfo() {
        let id = this.state.id,
            pw = this.state.password;
        if (id && pw) this.props.dispatch(login(id, pw));
        else alert('올바른 아이디 및 패스워드를 입력해주세요.d');
        
    }
    */
    render() {
        /*const mapStateToProps = (state) => {
            const {user} = state.login;
            return {user};
        };*/

        /*const redirect = this.props.login.user ? (<Redirect to ='/' />) : '';*/
        return (
            <div className="LogIn">
                <div className="box1">
                </div>
                <div className="box2">
                    <form>
                        <div>
                        <TextField
                            id="inputlogin"
                            label="Id"
                            type="id"
                            placeholder="아이디" required
                            //value={this.state.id}
                            //onChange={this.handleChange}
                            //onKeyDown={e => this.enterSubmit(e)}
                            />
                        </div>
                        <div>
                        <TextField
                            id="inputlogin"
                            label="Password"
                            type="password"
                            placeholder="비밀번호" required
                            //value={this.state.id}
                            //onChange={this.handleChange}
                            //onKeyDown={e => this.enterSubmit(e)}
                        />
                        </div>
                        <div>
                            <Button id="checkbtn" type="submit" variant="contained" value="EmailRequest" className="UserCheck" onClick={(e) => { this.onClickBtn() }}>확인</Button>
                        </div>
                        <div> -- 서버에서 온 값 : "{this.state.message}" </div>
                    </form>
                </div>
            </div>
            );
        }
    }
    
    /*
    export function login(id, pw) {
        const user = {
            "userEmail": id,
            "password" : pw
        };
        return dispatch => {
            // dispatch(requestLogin());
            return axios.post('35.232.159.201:3000/api/auth/login', user)
            .then(res => {
                //dispatch(receiveLogin(res.data));
            });
        };
        
    }
    */

    /*
    const login = (state = loginInitialState, action) => {
        switch(action.type) {
            case REQUEST_LOGIN:
                return Object.assign({}, state, {
                        onRequest: true
            });

        default:
            return state;
    };
    */

    export default LogIn;
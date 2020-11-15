import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./login.css";
import axios from 'axios';

class LogIn extends Component {

    LoginInfo() {
        let id = this.state.id,
            pw = this.state.password;
        if (id && pw) this.props.dispatch(login(id, pw));
        else alert('올바른 아이디 및 패스워드를 입력해주세요.');
        
    }
    
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
                            //value={this.state.id}
                            //onChange={this.handleChange}
                            //onKeyDown={e => this.enterSubmit(e)}
                        />
                        </div>
                        <div>
                            <Button id="checkbtn" type="submit" variant="contained" value="EmailRequest" className="UserCheck" onClick={this.login}>확인</Button>
                        </div>
                    </form>
                </div>
            </div>
            );
        }
    }
    

    export function login(id, pw) {
        const user = {
            "userEmail": id,
            "password" : pw
        };
        return dispatch => {
            /*dispatch(requestLogin());*/
            return axios.post('35.232.159.201:3000/api/auth/login', user)
            .then(res => {
                /*dispatch(receiveLogin(res.data));*/
            });
        };
        
    }

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
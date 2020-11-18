import React, { Component } from 'react';
import "./signUp.css"
import axios from 'axios';

class EmailAuth extends Component {


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
        console.log("target : "+target);
        const value = target.value;
        console.log("target.value : "+value);
        const name = target.name;
        console.log("target.name : "+name);

        this.setState({
            [name]: value
          });
      }

    async onClickBtn(){ 
    var ret;
    await axios.post('http://35.232.159.201:3000/api/auth/login',
    {
        "userId": this.state.userId,
        "password": this.state.password,
        "email": this.state.email
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
        alert("Error");
        //에러 페이지 세분화
    });

    this.setState({ message: ret.message});
    }

    render() {
        return (
            <form>
                <div>
                
                </div>
            </form>
            );
        }
    }
    
    export default EmailAuth;
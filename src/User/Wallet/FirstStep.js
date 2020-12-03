import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./wallet.css";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { JSEncrypt } from 'jsencrypt';

class FirstStep extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message : "아직 응답이 없습니다",
            pwd1: 0,
            pwd2: 1,
        };
        this.handleChange = this.handleChange.bind(this);
        this.e_comparePwd = this.e_comparePwd.bind(this);
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

    e_comparePwd(){
        if( this.state.pwd1 !== this.state.pwd2 ){
            console.log("비밀번호 불일치");
            return false
        } else{
            console.log("비밀번호가 일치합니다");
            localStorage.setItem('walletPwd',this.state.pwd1);
            return true;
        }
    }

    onClickBtn(){ 
    var ret;
    const compare = this.e_comparePwd();
        if(compare === true){ // 비밀번호가 일치하면---> 비밀번호 저장도 필요할 듯
            
            axios.get('http://35.232.159.201:3000/api/wallet/make',{
                headers: {
                'x-access-token': localStorage.getItem('jwt')
                }
            })
            .then((response) => {
                ret = response.data;
                console.log(ret);
                window.location.replace("/wallet/SecondStep");
            })
            .catch((error) => {
                ret = error.response;
                console.log(ret);
                ret = ret.data;
                console.log(ret);
                console.log(ret.msg);
                this.Createkey();
                alert("이미 지갑이 존재합니다.");
                //window.location.replace("/wallet/walletMain");

            });
            this.Getjwt();
            //this.setState({ message: ret});
        }
        else{ //아니면
            alert("입력된 두 비밀번호가 다릅니다. 다시 확인해주세요");
        }
    }

    Createkey(){
        var ret;
        var crypt = new JSEncrypt({
            default_key_size: 2048
        });
        var prikey = crypt.getPrivateKey();
        var pubkey = crypt.getPublicKey();
        console.log(crypt.getPrivateKey());
        console.log(crypt.getPublicKey());


        axios.post('http://35.232.159.201:3000/api/wallet/pubkey', {
                'publicKey': pubkey
            },{
                headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('jwt')
                }
            })
            .then((response)=> {
                ret = response.data;
                console.log(ret);
                console.log(ret.message);
                console.log("성공");
                
            })
            .catch((error)=> {
                ret = error.response;
                console.log(ret);
                alert("키 등록을 실패하였습니다.");
            });            
    }

    Getjwt(){
    var ret;
    var status;
    axios.get('http://35.232.159.201:3000/api/auth/check',{
            headers: {
            'x-access-token': localStorage.getItem('jwt')
            }
        })
        .then(function (response) {
            ret = response;
            status = ret.status;
            console.log("전송결과 : "+ret.statusText);
            // console.log(status);
            localStorage.setItem('status', status);
            
        })
        .catch(function (error) {
            ret = error.response;
            // console.log(ret);
            status = ret.status;
            localStorage.setItem('status', status);
        });            
    }


    render() {
        return (
            <div className="Wallet">
                <div className="header1">
                    <p className="header2">STEP 1. 정보입력</p>
                </div>
                <div className="Step">
                    <p className="w-title">Step 1</p>
                    <hr className="line"></hr>
                    <p className="w-txt">정보입력</p>
                </div>
                <div className="Contents">
                    <div className="contentsName">
                        <p className="w-title2">새 지갑 만들기</p>
                        <p className="w-txt2">새 지갑의 이름과 비밀번호를 입력해주세요</p>
                    </div>
                    <div className="contents">
                        <div className="conlayout">
                            <form>
                                {/* <div className="layout2">
                                    <p className="w-txt3">지갑 이름</p>
                                    <TextField
                                    id="w-input"
                                    label="지갑 이름 입력"
                                    type="walletName"
                                    variant="outlined"
                                    />
                                </div> */}
                                <div className="layout2">
                                    <p className="w-txt3">지갑 비밀번호</p>
                                    <TextField
                                    id="w-input"
                                    name="pwd1"
                                    label=" 영문,숫자,특수문자 혼용 8자 이상"
                                    type="walletPassword"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                <div className="layout2">
                                    <p className="w-txt3">비밀번호 재입력</p>
                                    <TextField
                                    id="w-input"
                                    name="pwd2"
                                    label="비밀번호 재확인"
                                    type="passwordCheck"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="stepButton">
                        <form>
                        <Button id= "subbtn" variant="contained" className="Confirmation" onClick={(e) => { this.onClickBtn() }}>확인</Button>     
                        {/*-- 서버에서 온 값 : "{this.state.message}"*/} 
                        </form>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default FirstStep;
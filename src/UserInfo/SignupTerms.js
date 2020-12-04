import React, { Component } from 'react';
import './signUp.css';
import stepimg from "./가입step1.svg";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {
    // Collapse, 
    Navbar,
    // NavbarToggler,
    // NavbarBrand,
    Nav,Form,InputGroup,FormControl,
    // NavItem,
    // NavLink,
    Container,
    Row,
    Col,
    // Jumbotron,
    // Button
  } from 'react-bootstrap';

class SignupTerms extends Component {
    render() {
        return (
            <div className="signup">
                
                {/* ---큰 화면일 때 ---*/}
                <div className="sign-header">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p className="bold">Sillock</p></Link>
                    <div className="sign-head">
                        <p>sillock 계정 생성</p>
                        <p className="sign-title">회원가입하기</p>
                    </div>
                    <img src={stepimg} className="sign-stepimg"/>
                </div>
                 {/* ---작은 화면일 때 ---*/}
                <div className="sign-header2">
                        <p className="bold" ><Link to="/" style={{ textDecoration: 'none', 
                        color:'white',marginTop:'0'}}>Sillock</Link></p>
                    <div className="sign-head">
                        <p className="sign-title">이용약관동의</p>
                    </div>
                </div>
                <div className="sign-content">
                    <div>
                        {/*<Checkbox className="sign-btn"
                            defaultChecked
                            color = "default"
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                        />*/}
                        <p className="sign-txt2">실록 서비스 이용약관, 개인정보 수집 이용에 모두 동의합니다.</p>
                        <p className="sign-txt3">실록 서비스 이용약관,<br/> 개인정보 수집 이용에 모두 동의합니다.</p>
                    </div>
                    <div>
                        <p className="txt1"> • 실록 서비스 이용약관 동의</p>
                        <div className="Cer-form">
                        <div className="container">
                        <strong>제1조(목적)</strong><br/>
                        본 회원약관은 실록(이하 '갑'라 한다)이 운영하는 인터넷관련 서비스(이하 '서비스'라 한다)를
                         이용함에 있어 관리자와 이용자(이하 '회원'라 한다)의 권리, 의무 및 책임사항을 규정함을 목적으로 한다.
                         <br/><br/><strong>제2조 (약관의 효력)</strong><br/>1.본 약관은 '갑'에 회원 가입 시 회원들에게 통지함으로써 효력을 발생합니다.<br/>
                         2.'갑'은 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.<br/>
                         3.약관의 변경사항 및 내용은 '갑'의 홈페이지에 게시하는 방법으로 공시합니다. <br/><br/><strong>제3조 (약관 이외의 준칙)</strong><br/> 이 약관에 명시되지 않은 사항이 전기 통신 기본법, 전기통신 사업법, 기타 관련 법령에 규정되어 있는 경우 그 규정에 따릅니다.
                         <br/><br/><strong>제4조 (이용계약의 체결)</strong><br/>회원 가입 시 회원 약관 밑에 있는 동의버튼을 누르면 약관에 동의하여 이 계약이 체결된 것으로 간주한다.
                         <br/><br/><strong>제5조 (용어의 정의)</strong><br/> 이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 
                         1.회원: '갑'과 서비스 이용에 관한 계약을 체결한 자     
                         2.아이디(ID): 회원 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 '갑'이 승인하는 문자와 숫자의 조합  
                         3.비밀번호: 회원이 통신상의 자신의 비밀을 보호하기 위해 선정한 문자와 숫자의 조합
                         <br/><br/><strong>제6조 (이용신청)</strong><br/>1.회원 가입은 온라인으로 가입신청 양식에 기록하여 '갑'에 제출함으로써 이용신청을 할 수 있습니다.
                         2.가입희망 회원은 반드시 자신의 본명 및 주민등록번호로 이용신청을 하여야 하며, 1개의 ID만 신청을 할 수 있습니다.
                         <br/><br/><strong>제7조 (회원가입의 승낙)</strong>
                    </div><br/>
                        </div>
                        <p className="txt1"> • 개인정보 수집 및 이용 동의</p>
                        <div className="Cer-form">
                        <div className="container">
                        실록(이하 '회사')은 '정보통신망 이용촉진 및 정보보호 등에 관한 법률’ 및 '개인정보보호법' 등 관련 법령과 '개인정보의 기술적·관리적 보호조치 기준, 
                        '표준 개인정보보호지침'을 준수하고 있으며, 정보통신망법 제 27조의 2에 따라 다음과 같이 ‘개인정보처리방침’을 공개합니다.<br/><br/>
                        <strong>1. 총칙</strong><br/>
                        (1) 개인정보란 생존하는 개인에 관한 정보로서 성명, 주민등록번호 등에 의하여 특정한 개인을 알아볼 수 있는 부호 · 문자 · 음성 · 음향 및 영상 등의 정보
                        (해당 정보만으로는 특정 개인을 알아볼 수 없어도 다른 정보와 쉽게 결합하여 알아 볼 수 있는 경우에는 그 정보를 포함)를 말합니다.
                        (2) 회사는 개인정보처리방침을 통하여 고객의 개인정보가 어떤 용도와 방식으로 이용되고 있으며 개인정보 보호를 위하여 어떤 조치가 취해지고 있는지 알려드립니다.<br/>
                        (3) 회사는 개인정보처리방침을 홈페이지(www.uplus.co.kr) 첫 화면에 공개함으로써 고객이 언제나 쉽게 보고 확인할 수 있도록 조치하고 있습니다.<br/>
                        (4) 회사는 개인정보처리방침을 관련 법령 또는 내부 운영규정의 변경에 따라 개정할 수 있으며, 개인정보처리방침을 개정하는 경우 버전번호 등을 부여하여 개정된 사항을 고객이 쉽게 알아볼 수 있도록 하고 있습니다.<br/>
                        2. 고객의 권리와 그 행사방법
                        (1) 고객은 언제든지 회사가 보유하는 개인정보, 개인정보의 이용 · 제공내역, 수집 · 이용 · 제공에 대한 동의내역을 열람하거나 정정할 수 있습니다. 해당 개인정보에 오류가 있거나 보존기간이 경과한 것으로 판명되는 등 정정 · 삭제를 할 필요가 있다고 인정되는 경우에는 회사는 지체 없이 이를 수정합니다.<br/>
                        (2) 고객은 회사의 직영점 또는 회사와 위탁업무계약을 체결한 대리점에 방문하여 개인정보에 대한 열람 또는 증명을 요구할 수 있습니다. 다만, 방문지에 따라 열람할 수 있는 정보가 제한적일 수 있습니다.<br/>
                        (3) 온라인 가입정보의 열람 및 정정을 하고자 하는 고객의 경우에는 홈페이지 내의 "회원정보변경"을 클릭하여 직접 열람 및 정정을 하거나, 사이버 고객센터 온라인 문의 할 수 있으며, 웹마스터에게 이메일로 연락하는 경우에도 회사는 지체 없이 필요한 조치를 취합니다.<br/>
                        (4) 회사는 대리인이 방문하여 열람 · 증명을 요구하는 경우에는 적법한 위임을 받았는지 확인할 수 있는 위임장 및 본인의 인감증명서와 대리인의 신분증 등을 제출 받아 정확히 대리인 여부를 확인합니다.<br/>
                        (5) 고객이 개인정보의 오류에 대한 정정을 요청한 경우, 정정이 완료되기 전까지 개인정보를 이용 또는 제공하지 않습니다.<br/>
                        (6) 회사는 잘못된 개인정보를 이미 제3자에게 제공한 경우 그 정정 처리결과를 제3자에게 지체 없이 통지하여 정정하도록 합니다.<br/>
                        (7) 고객은 개인정보를 최신의 상태로 정확하게 입력하고 변동 사항이 있는 경우, 이를 회사에 통보하여야 하며, 스스로 부정확한 정보를 입력하거나, 회사에 통보하지 않아서 회사가 알 수 없는 고객정보의 변동으로 인한 책임은 고객 자신에게 귀속됩니다.<br/>
                        (8) 고객이 타인 정보의 도용이나 침해, 허위정보를 입력하는 경우 서비스 해지 및 회원자격이 상실될 수 있으며 법 등 관련 법령에 따라 처벌받을 수 있습니다.<br/>
                        (9) 고객이 개인정보의 열람 · 제공을 반복적으로 요구하는 등 업무에 지장을 줄 우려가 있거나 그 분량이 상당하여 비용이 드는 경우, 회사는 고객의 요구를 연기 또는 거절하거나 업무처리에 따른 실비(복사비 등)를 고객에게 청구할 수 있습니다.<br/>
                        </div>
                        </div>
                    </div>
                    <form >
                        <div id="chk2">
                        <input type="checkbox" id="chk" required></input><label for="cb1" > 위 내용에 모두 동의합니다.</label>
                        </div>
                    <div className="sign-Button">
                        <Link to="/userinfo/login" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="sign-subbtn">이전</Button></Link>
                        <Link to="/userinfo/infoRegistration" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" type="submit" id="sign-subbtn2">다음</Button></Link>
                    </div>
                    </form>
                    
                </div>
                
            </div>
            );
        }
    }
    
    export default SignupTerms;
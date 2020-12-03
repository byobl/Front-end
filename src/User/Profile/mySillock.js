import React, { Component } from 'react';
import './mySillock.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileIMG from '../Profile/profile.png';
// import {
//     // Collapse, 
//     Navbar,
//     // NavbarToggler,
//     // NavbarBrand,
//     Nav,
//     // NavItem,
//     // NavLink,
//     Container,
//     Row,
//     Col,
//     // Jumbotron,
//     // Button
//   } from 'react-bootstrap';


class Mysillock extends Component {
    render() {
        return (
            <div>
                {/* <!-- Navbar --> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/"><strong>Sillock</strong></a>
                </nav>
                {/* <!-- Content Title --> */}
                <div className="content-title text-center">
                    <h1>내 실록지갑</h1>
                </div>
                {/* <!-- Contents --> */}
                    <div className="container-fulid contents text-center ">
                        <img src={profileIMG} alt='Profile 150x150' className='rounded-circle'/>

                        <div className="user-info">
                            <h5 className="mt-1">Name</h5>
                            <p className="text-muted">example@gmail.com</p>
                            <div className="docs-status text-center">
                                <span className="active-docs text-muted"><span className="dot"></span> 활성인증서 <span
                                        className="active-docs-num">7</span></span>
                                <span className="expire-docs text-muted"><span className="dot"></span> 만료인증서 <span
                                        className="expire-docs-num">3</span></span>
                            </div>
                            <div className="wallet-info mt-3">
                                지갑 번호 : 5D3CA007DFE0BCFC67243DF5E50FB4501BA08CAEFCD788536B8DBF0B4EB15D7A
                            </div>
                        </div>
                        <div class="btn-group row mx-auto w-100 text-center mt-2">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <button className="btn btn-sm rounded controll-btn">증명서 발급하기</button>
                                <button className="btn btn-sm rounded controll-btn">내 등록 이력</button>
                                <button className="btn btn-sm rounded controll-btn">프로필 편집</button>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                    </div>
                    
                    <div className="row mx-auto w-100 text-center mt-4 mb-3 contents-docs">
                    <div className="col-md-6">
                        <h5><strong>활성 인증서</strong></h5>
                        <hr className="line-div"/>
                        <div className="row mx-auto d-block docs-items">
                            <div className="grid-active">
                                <div className="grid-sizer"></div>
                                <div className="grid-item">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBR7u-fkfo54TMvVA3o_zVQm3nqRz6JWs1nA&usqp=CAU" alt="Certificate"/>
                                    <div className="docs-info">
                                        <p className="text-muted">한국정보기술연구원<br/>만료 <span>2021/01/01</span></p>
                                    </div>
                                </div>
                                <div className="grid-item">
                                    <img
                                        src="https://lh3.googleusercontent.com/proxy/W1yDDpNgOsCiQ9Bbfiens0U4UP2hgJ9LrHrLpr-gNdW55Bf7cCg-HuMzpJ3JeMyiOqrHENqpbA_6eA1M2ajsTKV-Cci4kJvD025Klxd8fkrST_dvQzYBRnd4j2W78nMjb4bPMmWmxgfo7F_2pMrf0LY40oLRTfppA62SlOmIuILHKXuY3GNxurctvrkaY2Bs1s34ej6Ylj_eykT_9cv7hxgwvmZaxm6CCYY_ogtJNcwntAVlXjK-IzczwskhdUCvT50RycYdFSMbgdxshvi_KOYXbetfwoJ9f37d" alt="Certificate"/>
                                    <div className="docs-info">
                                        <p className="text-muted">한국정보기술연구원<br/>만료 <span>2021/01/01</span></p>
                                    </div>
                                </div>
                                <div className="grid-item">
                                    <img
                                        src="https://lh3.googleusercontent.com/proxy/6_Qgr84mN5YOIcQFLt__iJc2EooItLWPCKrMLi8DiqfaTsRITvpjFfoZzulrsR2qMRC9WS4NeUqqSH3XJFeJUi34ClBra5VD66c889sMvfZe" alt="Certificate" />
                                    <div className="docs-info">
                                        <p className="text-muted">한국정보기술연구원<br/>만료 <span>2021/01/01</span></p>
                                    </div>
                                </div>
                                <div className="grid-item">
                                    <img src="https://i.pinimg.com/originals/dc/66/32/dc6632750ce10dcf480b3e4fa1ef16ad.jpg" alt="Certificate"/>
                                    <div className="docs-info">
                                        <p className="text-muted">한국정보기술연구원<br/>만료 <span>2021/01/01</span></p>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <img
                                        src="https://media.istockphoto.com/vectors/certificate-or-diploma-retro-design-template-vector-illustration-vector-id1129335621" alt="Certificate"/>
                                    <div className="docs-info">
                                        <p className="text-muted">한국정보기술연구원<br/>만료 <span>2021/01/01</span></p>
                                    </div>
                                </div>
                                <div className="grid-item">
                                    <img src="https://swlabs.hanyang.ac.kr/theme/oklassedu/pix/images/certificate.png" alt="Certificate"/>
                                    <div className="docs-info">
                                        <p className="text-muted">한국정보기술연구원<br/>만료 <span>2021/01/01</span></p>
                                    </div>
                                </div>
                                <div className="grid-item">
                                    <img
                                        src="https://media.istockphoto.com/vectors/certificate-or-diploma-retro-design-vector-id844521618" alt="Certificate"/>
                                    <div className="docs-info">
                                        <p className="text-muted">한국정보기술연구원<br/>만료 <span>2021/01/01</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h5><strong>만료 인증서</strong></h5>
                        <hr className="line-div line-div-expire"/>

                        <div className="row mx-auto d-block docs-items">
                            <div className="grid-expire">
                                <div className="grid-sizer"></div>
                                <div className="grid-item">
                                    <img
                                        src="https://image.freepik.com/free-vector/certificate-or-diploma-retro-vintage-design_12454-8030.jpg" alt="Certificate"/>
                                    <div className="docs-info">
                                        <p className="text-muted">한국정보기술연구원<br/>만료 <span>2021/01/01</span></p>
                                    </div>
                                </div>
                                <div className="grid-item">
                                    <img
                                        src="https://image.freepik.com/free-vector/certificate-or-diploma-retro-design-template_12454-7689.jpg" alt="Certificate" />
                                    <div className="docs-info">
                                        <p className="text-muted">한국정보기술연구원<br/>만료 <span>2021/01/01</span></p>
                                    </div>
                                </div>
                                <div className="grid-item">
                                    <img src="https://blog.hangadac.com/wp-content/uploads/sites/8/2017/07/certificate.jpg" alt="Certificate"/>
                                    <div className="docs-info">
                                        <p className="text-muted">한국정보기술연구원<br/>만료 <span>2021/01/01</span></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <script src="https://npmcdn.com/imagesloaded@4.1/imagesloaded.pkgd.js"></script>
                <script src="../Profile/masonry.pkgd.min.js"></script>
                <script src="../Profile/imagesMasonry.js"></script>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                    crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
                    crossorigin="anonymous"></script>          
            </div>
            );
        }
    }
    
    export default Mysillock;
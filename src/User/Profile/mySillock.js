import React, { Component } from 'react';
import './mySillock.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileIMG from '../Profile/profile.png';

//import Masonry from 'react-masonry-css'
import Masonry from 'react-masonry-component';


const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
}

class Mysillock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: [
                { src: "https://media.istockphoto.com/vectors/certificate-or-diploma-retro-design-vector-id844521618" },
                { src: "https://image.freepik.com/free-vector/certificate-or-diploma-retro-design-template_12454-7689.jpg" },
                { src: "https://media.istockphoto.com/vectors/certificate-or-diploma-retro-design-template-vector-illustration-vector-id1129335621" },
                { src: "https://swlabs.hanyang.ac.kr/theme/oklassedu/pix/images/certificate.png" },
                { src: "https://i.pinimg.com/originals/dc/66/32/dc6632750ce10dcf480b3e4fa1ef16ad.jpg" },
                { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBR7u-fkfo54TMvVA3o_zVQm3nqRz6JWs1nA&usqp=CAU" },
            ]
        }
    }

    render() {
        const childElements = this.state.elements.map(function (element, index) {
            return (
                <div key={index} className='grid-item'>
                    <img src={element.src} />
                    <div className="docs-info">
                        <p className="text-muted">한국정보기술연구원
                        만료 <span>2021/01/01</span></p>
                    </div>
                </div>
            );
        });

        return (
            <div>
                {/* <!-- Navbar -->
                <nav nav className="navbar navbar-expand-lg navbar-light bg-light" >
                   
                </nav> */}
                {/* <!-- Content Title --> */}
                <div className="content-title text-center" id="nav1">
                    <a className="navbar-brand" href="/"><strong>Sillock</strong></a>
                    <h2>내 실록지갑</h2>
                </div>
                {/* <!-- Contents --> */}
                <div div className="container-fulid contents text-center " >
                    <img src={profileIMG} alt='Profile 150x150' className='rounded-circle' />

                    <div className="user-info">
                        <h5 className="mt-1">Name</h5>
                        <p className="text-muted">example@gmail.com</p>
                        <div className="docs-status text-center">
                            <span className="active-docs text-muted"><span className="dot"></span> 활성인증서 <span
                                className="active-docs-num">7</span></span>
                            <span className="expire-docs text-muted"><span className="dot"></span> 만료인증서 <span
                                className="expire-docs-num">3</span></span>
                        </div>
                        <div className="wallet-info mt-3 ml-5">
                            지갑 번호 : 5D3CA007DFE0BCFC67243DF5E50FB4501BA08CAEFCD788536B8DBF0B4EB15D7A
                        </div>
                    </div>
                    <div className="btn-group row mx-auto w-100 text-center mt-2">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <button className="btn btn-sm rounded controll-btn">증명서 발급하기</button>
                            <button className="btn btn-sm rounded controll-btn">내 등록 이력</button>
                            <button className="btn btn-sm rounded controll-btn">프로필 편집</button>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>

                    <div className="row mx-auto w-100 h-100 text-center mt-4 mb-3 contents-docs">
                        <div className="col-md-6">
                            <h5><strong>활성 인증서</strong></h5>
                            <hr className="line-div" />
                            <div className="row mx-auto d-block docs-items">
                                <Masonry
                                    className={'grid'} // default ''
                                    elementType={'div'} // default 'div'
                                    options={masonryOptions} // default {}
                                    imagesLoadedOptions={imagesLoadedOptions}
                                    disableImagesLoaded={false} // default false
                                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                                >

                                    {childElements}
                                </Masonry>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h5><strong>만료 인증서</strong></h5>
                            <hr className="line-div line-div-expire" />

                            <div className="row mx-auto d-block docs-items">
                            <Masonry
                                    className={'grid'} // default ''
                                    elementType={'div'} // default 'div'
                                    options={masonryOptions} // default {}
                                    imagesLoadedOptions={imagesLoadedOptions}
                                    disableImagesLoaded={false} // default false
                                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                                >

                                    {childElements}
                                </Masonry>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default Mysillock;
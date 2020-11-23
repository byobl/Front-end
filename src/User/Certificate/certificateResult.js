import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './announcement.css';
class CertificateResult extends Component {
    render() {
        return (
            <div className="background">
                <Link to="/" style={{ textDecoration: 'none' }}><p className="sillock">Sillock</p></Link>
                <div>
                 <h1 className="loadMsg">모든 이력 증명이 완료되었습니다.</h1>
                 </div>
                <form className="center-btn">
                <Link to="/"><Button id= "resultbtn" type="submit" variant="contained" value="Confirmation" className="Confirmation">홈으로</Button></Link>
                </form>
            </div>
            );
        }
    }
    
    export default CertificateResult;
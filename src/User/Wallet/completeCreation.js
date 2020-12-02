import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./failAccess.css";

import Button from '@material-ui/core/Button';


class CompleteCreation extends Component {
    render() {
        return (
            <div className="background">
                <Link to="/" style={{ textDecoration: 'none' }}><p className="sillock">Sillock</p></Link>
                <div>
                <p className="resultMsg">지갑 생성이 완료되었습니다.</p>
                </div>
                <form className="center-btn">
                    <Link to="/"><Button id= "resultBtn" variant="contained" value="Confirmation" >내 지갑 확인하기</Button></Link>             
                </form>
            </div>
            
            );
        }
    }
    
    export default CompleteCreation;
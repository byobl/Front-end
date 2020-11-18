import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./failAccess.css";

import Button from '@material-ui/core/Button';


class FailAccess extends Component {
    render() {
        return (
            <div className="background">
                <Link to="/" style={{ textDecoration: 'none' }}><p className="sillock">Sillock</p></Link>
                <div>
                <p className="resultMsg">유효하지 않은 접근입니다.<br></br>다시 해보시겠습니까?</p>
                </div>
                <form className="centerBtn">
                    <tr>
                        <td><Link to="/wallet/UploadWallet"><Button id= "subbtn2" type="submit" variant="contained" value="Confirmation" className="Confirmation">이전 화면으로</Button></Link></td>
                        <td><Link to="/wallet/FirstStep"><Button id= "subbtn3" type="submit" variant="contained" value="Confirmation" className="Confirmation">새 지갑 발급하기</Button></Link></td>                
                    </tr>      
                </form>
            </div>
            
            );
        }
    }
    
    export default FailAccess;
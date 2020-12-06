import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./walletMain.css";


class WalletMain extends Component {
    render() {
        return (
            <div className="WalletMain">
                <Link to="/" style={{ textDecoration: 'none' }}><p className="sillock">Sillock</p></Link>
                <p className="text">내 지갑 생성하기</p>
                <table id="table">
                    <tr>
                        <td><Link to="/wallet/FirstStep" style={{ textDecoration: 'none' }}><Button variant="outlined" id="button">새 지갑 만들기</Button></Link></td>
                    </tr>
                    <tr>
                       <td><Link to="/wallet/uploadWallet" style={{ textDecoration: 'none' }}><Button variant="outlined" id="button">지갑 가져오기</Button></Link></td>
                    </tr>
                </table>
            </div>
            );
        }
    }
    
    export default WalletMain;
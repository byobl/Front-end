import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./walletMain.css";

const style = {
    height: '1vh',
    width:'50vw',
    padding: '10vh 10vh ',
    boxShadow: '0 3px 5px 2px rgba(204, 204, 255, .3)',
    display:'flex',
  };

class WalletMain extends Component {
    render() {
        return (
            <div className="WalletMain">
                <Link to="/" style={{ textDecoration: 'none' }}><p className="sillock">Sillock</p></Link>
                <p className="text">내 지갑 생성하기</p>
                <table id="table">
                    <tr>
                        <td><Link to="/wallet/IdentityVerification" style={{ textDecoration: 'none' }}><Button variant="outlined" style={style} id="button">새 지갑 만들기</Button></Link></td>
                    </tr>
                    <tr>
                       <td><Link to="/wallet/loadWallet" style={{ textDecoration: 'none' }}><Button variant="outlined" style={style} id="button">지갑 가져오기</Button></Link></td>
                    </tr>
                </table>
            </div>
            );
        }
    }
    
    export default WalletMain;
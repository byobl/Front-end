import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import "./certificateMain.css";
import { Link } from 'react-router-dom';



const style = {
    height: '10vh',
    width:'35vw',
    padding: '25vh 10vh ',
    boxShadow: '0 3px 5px 2px rgba(204, 204, 255, .3)',
    display:'flex',
  };

class CertificateMain extends Component {
    render() {
        return (
            <div className="CertificateMain">
                <Link to="/" style={{ textDecoration: 'none' }}><p className="sillock" id="line">Sillock</p></Link>
                <p className="text">내 증명서 만들기</p>
                <table id="table">
                    <tr>
                        <td><Link to="/certificate/careerInstitution" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" style={style} id="button">내 이력 등록하기</Button>
                            </Link></td>
                        <td><Link to="/certificate/myChoice" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" style={style} id="button">나만의 증명서<br/>조합하기</Button>
                            </Link></td>
                    </tr>
                </table>
            </div>
            );
        }
    }
    
    export default CertificateMain;
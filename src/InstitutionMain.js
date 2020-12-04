import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Navbar from "./Components/Navbar/Navbar";
import { Link } from 'react-router-dom';
import './Main.css';

const style = {
    background: 'linear-gradient(20deg, rgba(51,51,204,50%) 30%, rgba(0,51,153,70%) 70%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '25vh 10vh ',
    boxShadow: '0 3px 5px 2px rgba(204, 204, 255, .3)',
    display:'flex',
    
  };
  
  const style2 = {
    background: 'linear-gradient(10deg, rgba(0,153,153,50%) 30%, rgba(51,204,204,70%) 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '25vh 8vh ',
    boxShadow: '0 3px 5px 2px rgba(204, 204, 255, .3)',
    display:'flex'
  };

class InstitutionMain extends Component {
    render() {
        return (
             <div className="InstitutionMain">
             <div className="nav">
                <Navbar></Navbar>
              </div>
              
              <table className="table">
              <tr>
                <td>
                    <div className="info">
                      <p className="info2">Sillock</p>
                      <p>사실을 있는 그대로 적은 기록</p>
                      <p>그리고 블록체인</p>
                    </div>
                </td>
                  <div className="button">
                    <td>
                      <Link to="/issureRegister" style={{ textDecoration: 'none' }}><Button style={style} variant="contained">
                        <p id="font">발행기관전용</p>
                        {/* <p>이력을 보관 할 증명 지갑을 쉽고 간편하게 만들어 보세요!</p> */}
                        </Button></Link>
                      </td>
                    <td>
                      <Link to="/dashboard" style={{ textDecoration: 'none' }}><Button style={style2} variant="csontained" id="font" >검증기관 전용</Button></Link>
                      </td>
                   </div>
                 </tr>
               </table>
               
            </div>
            );
        }
    }
    
    export default InstitutionMain;
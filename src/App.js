import Button from '@material-ui/core/Button';
import Navbar from "./Components/Navbar/Navbar.js";
import './App.css';

const style = {
  background: 'linear-gradient(20deg, rgba(150,0,230,50%) 30%, rgba(180,0,185,70%) 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '25vh 10vh ',
  boxShadow: '0 3px 5px 2px rgba(204, 204, 255, .3)',
  display:'flex',
  
};

const style2 = {
  background: 'linear-gradient(10deg, rgba(102,102,255,50%) 30%, rgba(102,180,255,70%) 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '25vh 8vh ',
  boxShadow: '0 3px 5px 2px rgba(204, 204, 255, .3)',
  display:'flex'
};

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <table className="table">
      
      <tr><td>
          <div className="info">
            <p className="info2">Sillock</p>
            <p>사실을 있는 그대로 적은 기록</p>
            <p>그리고 블록체인</p>
          </div>
       </td>
          <div className="button">
            <td><Button style={style} variant="contained" id="font">지갑생성하기</Button></td>
            <td><Button style={style2} variant="contained" id="font" >내 증명서 만들기</Button></td>
           </div>
         </tr>
       </table>

      
    </div>
  );
}
export default App;


import Button from '@material-ui/core/Button';
//import Navbar from "./Components/Navbar/Navbar";
//import { Link } from 'react-router-dom';
// import './Main.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import BGimage from './img/보라배경.svg'

import {
  Collapse, 
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  // Button
} from 'react-bootstrap';

// import * as ReactBootstrap from 'react-bootstrap';

const all = {
  padding: "0",
  margin: "0",

  paddingTop: "70px"
}

const banner = {
  color: "#8a2be2",
  fontSize: "2rem",
  fontWeight: "bold"
}

const navContent = {
  color: "black",
  fontSize: "1.25rem",
  fontWeight: "bold",
  paddingRight: "30px"
}

const style = {
  color: "white",
  width: "100%",
  height: "calc(100vh - 80px)",
  margin: "0 auto",
  position: "relative",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: "url(" + BGimage + ")"
}

const buttonStyle1 = {
  fontSize: "1.75rem",
  background: 'linear-gradient(20deg, rgba(150,0,230,50%) 30%, rgba(180,0,185,70%) 90%)',
  borderRadius: 3,
  width: "100%",
  border: 0,
  color: 'white',
  height: "20vw",
  boxShadow: '0 3px 5px 2px rgba(204, 204, 255, .3)',
}

const buttonStyle2 = {
  fontSize: "1.75rem",
  background: 'linear-gradient(10deg, rgba(102,102,255,50%) 30%, rgba(102,180,255,70%) 90%)',
  borderRadius: 3,
  border: 0,
  width: "100%",
  color: 'white',
  height: "20vw",
  boxShadow: '0 3px 5px 2px rgba(204, 204, 255, .3)',
}

// function LogIn(props) {
//   return  <ReactBootstrap.Button  href="/userinfo/login" style={navContent} variant="light">로그인</ReactBootstrap.Button>;
// }

// function LogOut(props) {
// return <h3>안녕하세요 고객님</h3>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }


function UserMain() {
  return (
    <>
      <Container fluid style={all}>
        <Navbar collapseOnSelect expand="lg" bg="light" className="fixed-top">
          <Navbar.Brand href="#home" style={banner}>
            Sillock <i className="fas fa-cubes"></i>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#" style={navContent}>실록소개</Nav.Link>
              <Nav.Link href="#" style={navContent}>실록안내</Nav.Link>
              <Nav.Link href="/institutionMain" style={navContent}>기업/기관</Nav.Link>
              <Nav.Link href="#" style={navContent}>자주 묻는 질문</Nav.Link>
              <Button  href="/userinfo/login" style={navContent} variant="light">로그인</Button>
             
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div style={style}>
          <Container className="h-100">
            <Row className="align-items-center h-100">
              <Col xs={12} md={4}>
                <p className="info2">Sillock</p>
                <p >사실을 있는 그대로 적은 기록</p>
                <p>그리고 블록체인</p>
              </Col>
              <Col xs={12} md={8} className="w-100 text-center">
                <Row>
                  <Col xs={12} md={6} className="box">
                    <Button  href="/wallet/walletMain" style={buttonStyle1} className="mb-4">지갑생성하기</Button>
                  </Col>
                  <Col xs={12} md={6} className="box">
                    <Button  href="/certificateMain" style={buttonStyle2}>내 증명서 만들기</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}
export default UserMain;

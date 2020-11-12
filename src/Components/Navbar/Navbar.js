import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Buttons} from "./Button"
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    state={clicked:false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <Link to="/" style={{ textDecoration: 'none' }}><h1 className="navbar-logo">Sillock<i className="fas fa-cubes"></i></h1></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=> {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Link to="/login"><Buttons>로그인</Buttons></Link>
            </nav>
        )
    }
}

export default Navbar
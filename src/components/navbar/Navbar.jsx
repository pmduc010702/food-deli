import React, { useContext, useState } from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { assets } from './../../assets/assets';
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { StoreContext } from './../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home")
    const {getTotalCartAmount} = useContext(StoreContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand " href="#"><h1>Duc.</h1></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100">
                        <li className="nav-item">
                            <Link
                                to='/'
                                onClick={() => setMenu("home")}
                                className={`nav-link ${menu === "home" ? "active" : ""}`}
                                href="#"
                            >HOME</Link>
                        </li>
                        <li className="nav-item">
                            <a
                                onClick={() => setMenu("menu")}
                                className={`nav-link ${menu === "menu" ? "active" : ""}`}
                                href="#explore-menu">
                                MENU</a>
                        </li>
                        <li className="nav-item">
                            <a
                                onClick={() => setMenu("about")}
                                className={`nav-link ${menu === "about" ? "active" : ""}`}
                                href="#food-list">
                                FOOD LIST</a>
                        </li>
                        <li className="nav-item">
                            <a
                                onClick={() => setMenu("contact")}
                                className={`nav-link ${menu === "contact" ? "active" : ""}`}
                                href="#footer">
                                CONTACT</a>
                        </li>
                    </ul>
                    <form className="d-flex align-items-center">
                        <div className="input-group me-3">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-secondary" type="button"><CiSearch size={20} /></button>
                        </div>

                        <div className="navbar-basket me-3">
                            <Link to='/cart'><FaCartArrowDown size={30} style={{ color: 'tomato' }} /></Link>
                            <div className={getTotalCartAmount() === 0?"":"dot"}></div>
                        </div>

                        <button
                            onClick={() => setShowLogin(true)} 
                            className="btn btn-outline-secondary ms-2" type="button">Login</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

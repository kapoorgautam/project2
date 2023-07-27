import "./Navbarstyles.css"
import logoImg from "../assets/logo.png"
import walogoImg from "../assets/logo-wa.png"


import React, {useState} from "react"
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [ click,setClick ] = useState(false);
    const handleClick = ( )=> setClick(!click);

    const [color,setColor] = useState(false);
    const changeColor = () => {
         if (window.scrollY >= 100){
            setColor(true);
         }
         else{
            setColor(false);
         }

    };
    window.addEventListener("scroll",changeColor);

    return (
        <><div className={color ? "header header-bg" : "header"}>
            <Link to="/">

                <img className="logo" src={logoImg} alt="logos" />
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>

                <li>
                    <Link to="/">Home</Link>
                </li>
                
                <li>
                    <Link to="/Treat">Treatment</Link>
                </li>

                <li>
                    <Link to="/About">About Us</Link>
                </li>
                <li>
                    <Link to="/Contact">contact Us</Link>
                </li>
               
            </ul>
            <div className="hamburger" onClick={handleClick} >
                {click ? (<FaTimes size={20} style={{ color: "white" }} />) :
                    (<FaBars size={20} style={{ color: "white" }} />)}

            </div>


        </div><Link to="https://wa.me/918447646815?text=hello">

                <img className="logowa"src={walogoImg} alt="logos" />
            </Link></>
    );
}

export default Navbar

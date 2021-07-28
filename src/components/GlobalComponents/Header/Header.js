

import React, { useEffect, useState } from 'react'
import './Header.css'
// import { NavLink } from 'react-router-dom'


// import logo from '../Assets/Images/Group 143.png'
// import signinIcon from '../Assets/Images/sign in icon.png'
// import MenuIcon from '@material-ui/icons/Menu'
// import CloseIcon from '@material-ui/icons/Close'

function Navbar() {
    
    const [show, handleShow] = useState(false);

    const transitionNavbar= () => {
        if (window.scrollY > 50) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar); 
    }, []);

    const [open, setOpen] = useState(false);
    
    return (
         <div className="header">
               <div className={`navbar ${show && 'nav__scroll'}`}>
            {/* <Link to="/"> */}
                <div className="logo__container">
                    <img src="https://creativechaos.co/wp-content/themes/ccweb/images/creativechaos-logo-ni.svg" className="logo" />
                    {/* <p style={{color:"black",fontSize:"2rem"}} className={ `${show && 'nav__scroll_menu'} `}>Soy Keylen</p> */}
                </div>
            {/* </Link> */}


            <div className="click__menu" onClick={()=> setOpen(!open)}><svg  className={ `${show && 'nav__scroll_menu'} `} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></div>
            <div className="nav__content" style={{ display: open ? "flex" : "flex", left: open ? "0" : "-100%"}}>
                <a to="/" className="nav__link" style={{marginTop:"-12px"}}><span  className={ `${show && 'nav__scroll_menu'} `}style={{fontSize:"2rem",color:"black !important"}}>Home</span></a>
                <a to="/Blog" className="nav__link" style={{marginTop:"-12px"}}><span className={ `${show && 'nav__scroll_menu'} `} style={{fontSize:"2rem",color:"black !important"}}>Blog</span></a>
                <a to="/Portfolio" className="nav__link" style={{marginTop:"-12px"}}><span className={ `${show && 'nav__scroll_menu'} `} style={{fontSize:"2rem",color:"black !important"}}>Portfolio</span></a>
             
                <div className="close__menu" onClick={()=> setOpen(false)} style={{display:"none"}}>
                <svg className="close_menu_img" xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
                </div>
            </div>
        </div>
         </div>
    )
}

export default Navbar
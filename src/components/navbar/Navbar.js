import React, { useState,useEffect, Component } from 'react'
import {MenuItems} from './MenuItem'
import './Navbar.css'
// import logo from '../../Assets/logo/BVS_Logo.png'
import logo from '../../Assets/logo/bvs_logo.svg'
const Navbar = () => {


    const [clicked,setClicked] = useState(false)
    const [headerbg,setHeaderbg] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    const handleScroll =(e)=>{
        // console.log("scroll value",window.scrollY)
        if(window.scrollY > 400) {
            setHeaderbg(true)
        }
        else {
            setHeaderbg(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    },[])
        return(
           <nav className={headerbg?"NavbarItems activeHeader":"NavbarItems"} >
                <div className="menu-logo">
                   <img src={logo}/>
                </div>
               <div className="menu-icon" onClick={()=>handleClick()}>
                   
                 <i className={clicked?'fas fa-times':'fas fa-bars'}></i>
                </div>
               <div className="menu-list" >
                 <div className={clicked?'nav-menu active':'nav-menu'}>
                    <div><a  href="#about" onClick={()=>setClicked(false)}>About</a></div>
                    <div><a  href="#category" onClick={()=>setClicked(false)}>Categories</a></div>
                    <div ><a href="#shuffle" onClick={()=>setClicked(false)}>School of Shuffle</a></div>
                    <div ><a>Voice of the streets</a></div>
                    <div ><a>FAQs</a></div>
                    <div className="navbar_register"><span>Register</span></div>
                 </div>
               </div>
             
           </nav>

        )
    
}


export default Navbar;
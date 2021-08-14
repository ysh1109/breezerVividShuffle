import React, { useState,useEffect} from 'react'
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
                   <img alt={"logo"} src={logo} style={{height:100}}/>
                </div>
               <div className="menu-icon" onClick={()=>handleClick()}>
                   
                 <i className={clicked?'fas fa-times':'fas fa-bars'}></i>
                </div>
               <div className="menu-list" >
                 <div className={clicked?'nav-menu active':'nav-menu'}>
                    <div><a  href="#about" onClick={()=>setClicked(false)}>About</a></div>
                    <div><a  href="#category" onClick={()=>setClicked(false)}>Categories</a></div>
                    <div ><a href="#shuffle" onClick={()=>setClicked(false)}>School of Shuffle</a></div>
                    <div ><a href="#shuffle" >Voice of the streets</a></div>
                    <div ><a href="#shuffle" >FAQs</a></div>
                    <div className="navbar_register"><span>Register</span></div>
                 </div>
               </div>
             
           </nav>

        )
    
}


export default Navbar;

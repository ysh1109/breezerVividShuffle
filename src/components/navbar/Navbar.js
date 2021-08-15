import React, { useState,useEffect} from 'react';
import './Navbar.css';
// import logo from '../../Assets/logo/BVS_Logo.png'
import logo from '../../Assets/logo/bvs_logo.svg';
import Register from '../../Assets/categories/register.svg';
const Navbar = props => {
    const [clicked,setClicked] = useState(false)
    const [headerbg,setHeaderbg] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    const handleScroll = (e) => {
        // console.log("scroll value",window.scrollY)
        if(window.scrollY > 400) {
            setHeaderbg(true)
        }
        else {
            setHeaderbg(false)
        }
    }
	const MoveToFirst = () => {
		setClicked(false);
		if(props.activeScreen !== 0)
			props.setActiveScreen(0);
	}
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    },[])
    return (
       <nav className={headerbg?"NavbarItems activeHeader":"NavbarItems"} style={{position:props.activeScreen === 0 ? 'fixed':'relative'}} >
            <div className="menu-logo">
               <img alt={"logo"} src={logo} style={{height:100}}/>
            </div>
           <div className="menu-icon" onClick={handleClick}>
               
             <i className={clicked?'fas fa-times':'fas fa-bars'}></i>
            </div>
           <div className="menu-list" >
             <div className={clicked?'nav-menu active':'nav-menu'}>
                <li><a  href="#about" onClick={MoveToFirst}>About</a></li>
                <li><a  href="#category" onClick={MoveToFirst}>Categories</a></li>
                <li><a href="#shuffle" onClick={MoveToFirst}>School of Shuffle</a></li>
                <li><span onClick={() => props.setActiveScreen(1)} >Voice of the streets</span></li>
                <li><span onClick={() => props.setActiveScreen(2)} >FAQs</span></li>
                <li className="navbar_register"><img alt={"Register"} src={Register} /></li>
             </div>
           </div>
         
       </nav>
    )
}


export default Navbar;

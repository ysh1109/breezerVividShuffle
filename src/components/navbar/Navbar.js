import React, { useState,useEffect} from 'react';
import './Navbar.css';
// import logo from '../../Assets/logo/BVS_Logo.png'
import logo from '../../Assets/logo/bvs_logo.svg';
import Register from '../../Assets/categories/register.svg';
import { Menu, Dropdown } from 'antd';

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
  	const scrollAboutToTop = () => {
		MoveToFirst();
		window.scrollBy(0, props.abt - 110);
  	}
  	const scrollCategoryToTop = () => {
		MoveToFirst();
		window.scrollBy(0, props.cat - 110);
  	}
  	const scrollShuffleToTop = () => {
		MoveToFirst();
		window.scrollBy(0, props.vots - 110);
  	}
      const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="#">Participation</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="#">School of Shuffle</a>
          </Menu.Item>
          <Menu.Divider />
        </Menu>
      );
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
		window.onscroll = () => {
			if(document.getElementById("about"))
			{
				props.setAbt(document.getElementById("about").getBoundingClientRect().top);
				props.setCat(document.getElementById("category").getBoundingClientRect().top);
				props.setVots(document.getElementById("shuffle").getBoundingClientRect().top);
			}
		}
    },[])
    return (
       <nav className={headerbg?"NavbarItems activeHeader":"NavbarItems"} style={{position:props.activeScreen === 0 ? 'fixed':'relative'}} >
            <div className="menu-logo">
			<img alt={"logo"} onClick={()=>{
				window.scrollTo(0,0);
                props.setActiveScreen(0)
			}} src={logo} style={{height:100}}/>
            </div>
           <div className="menu-icon" onClick={handleClick}>
               
             <i className={clicked?'fas fa-times':'fas fa-bars'}></i>
            </div>
           <div className="menu-list" >
             <div className={clicked?'nav-menu active':'nav-menu'}>
                <li><span onClick={scrollAboutToTop}>About</span></li>
                <li><span onClick={scrollCategoryToTop}>Categories</span></li>
                <li><span onClick={scrollShuffleToTop}>School of Shuffle</span></li>
                <li><span onClick={() => {props.setActiveScreen(1); setClicked(false)}} >Voice Of The Streets</span></li>
                <li><span onClick={() => {props.setActiveScreen(2); setClicked(false)}} >FAQs</span></li>
                <li className="navbar_register">
                    <Dropdown overlay={menu} trigger={['hover']}> 
                        <img alt={"Register"} src={Register} />
                    </Dropdown> 
                </li>
             </div>
           </div>
         
       </nav>
    )
}


export default Navbar;

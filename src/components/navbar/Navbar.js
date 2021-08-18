import React, { useState,useEffect} from 'react';
import './Navbar.css';
// import logo from '../../Assets/logo/BVS_Logo.png'
import logo from '../../Assets/logo/Logo.gif';
import Register from '../../Assets/categories/register.svg';
import { Menu, Dropdown } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
  useParams
} from "react-router-dom";

const Navbar = props => {
    const [clicked,setClicked] = useState(false)
    const [headerbg,setHeaderbg] = useState(false)
	const history = useHistory();
    const [selectedPage,setSelectedPage] = useState(null)
	
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
		history.push('/');
		if(props.activeScreen !== 0)
			props.setActiveScreen(0);
	}
  	const scrollAboutToTop = () => {
		MoveToFirst();
		setSelectedPage(0);
		if(props.abt)
			window.scrollBy(0, props.abt - 110);
		else
		{
			window.scrollBy(0, window.innerHeight);
			window.scrollBy(0, props.abt - 110);
		}
  	}
  	const scrollCategoryToTop = () => {
		MoveToFirst();
		setSelectedPage(1);
		if(props.cat)
			window.scrollBy(0, props.cat - 110);
		else
		{
			window.scrollBy(0, window.innerHeight * 3);
			window.scrollBy(0, props.cat - 110);
		}
  	}
  	const scrollShuffleToTop = () => {
		MoveToFirst();
		setSelectedPage(2);
		if(props.vots)
			window.scrollBy(0, props.vots - 110);
		else
		{
			window.scrollBy(0, window.innerHeight * 4);
			window.scrollBy(0, props.vots - 110);
		}
  	}
      const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="#">Participation </a>
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
			let abtElem = document.getElementById("about")
			let catElem = document.getElementById("category")
			let shuffElem = document.getElementById("shuffle")
			if(document.getElementById("about"))
			{
				props.setAbt(abtElem.getBoundingClientRect().top);
				if(abtElem.getBoundingClientRect().top <= 110 && catElem.getBoundingClientRect().top > 110 )
				{
					setSelectedPage(0);
				}
				else if(catElem.getBoundingClientRect().top <= 110 && shuffElem.getBoundingClientRect().top > 110)
				{
					setSelectedPage(1);
				}
				else if(shuffElem.getBoundingClientRect().top <= 110 && shuffElem.getBoundingClientRect().bottom > 110)
				{
					setSelectedPage(2);
				}
				else if(shuffElem.getBoundingClientRect().top <= 0)
				{
					setSelectedPage(null);
				}
				else
				{
					setSelectedPage(null);
				}
				props.setCat(catElem.getBoundingClientRect().top);
				props.setVots(shuffElem.getBoundingClientRect().top);
			}
		}
    },[])
    return (
       <nav className={headerbg?"NavbarItems activeHeader":"NavbarItems"} style={{position:props.activeScreen === 0 ? 'fixed':'relative'}} >
            <div className="menu-logo">
			<img alt={"logo"} onClick={()=>{
				window.scrollTo(0,0);
				setSelectedPage(null);
			}} src={logo} style={{height:100}}/>
            </div>
           <div className="menu-icon" onClick={handleClick}>
               
             <i className={clicked?'fas fa-times':'fas fa-bars'}></i>
            </div>
           <div className="menu-list" >
             <div className={clicked?'nav-menu active':'nav-menu'}>
                <li><span className={selectedPage===0?"aboutNav-active":"aboutNav"} onClick = {scrollAboutToTop}>About</span></li>
                <li><span className={selectedPage===1?"categoriesNav-active":"categoriesNav"} onClick = {scrollCategoryToTop}>Categories</span></li>
                <li><span className={selectedPage===2?"sosNav-active":"sosNav"} onClick = {scrollShuffleToTop}>School of Shuffle</span></li>
                <li className={selectedPage===3 ? "voiceNav-active":"voiceNav"}><span  onClick={() => {history.push('/voiceofthestreets'); window.scrollTo(0,0); setClicked(false); setSelectedPage(3)}} >Voice Of The Streets</span></li>
                <li><span className={selectedPage===4 ? "faqNav-active":"faqNav"} onClick={() => {history.push('/faq');window.scrollTo(0,0);setClicked(false);setSelectedPage(4)}} >FAQs</span></li>
                <li className="navbar_register">
                    <Dropdown overlay={menu} trigger={['click']}> 
                        <img alt={"Register"} src={Register} />
                    </Dropdown> 
                </li>
             </div>
           </div>
         
       </nav>
    )
}


export default Navbar;

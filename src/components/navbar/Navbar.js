import React, { useState,useEffect} from 'react';
import './Navbar.css';
import logo from '../../Assets/logo/BVS_Logo.png'
import logoMov from '../../Assets/logo/Logo_Flip.mov';
import logoWebm from '../../Assets/logo/bvslogoflip.webm'
import Register from '../../Assets/categories/register.svg';
import { Menu, Dropdown,Popover, Button,Tooltip } from 'antd';



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
	const [isSafari,setIsSafari] = useState(false)
	
    const handleClick = () => {
        setClicked(!clicked)
    }
	const content = (
		<div>
		  <p>Coming Soon...</p>
		</div>
	  );
    const handleScroll = (e) => {
        // console.log("scroll value",window.scrollY)
        if(window.scrollY > 200) {
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
          {/* <Menu.Item key="0">
            <a href="https://insider.in/breezer-vivid-shuffle-online/article" target="_blank">Participation </a>
	

			<a onClick={() => {history.push('/sos'); window.scrollTo(0,0); setClicked(false); setSelectedPage(2)}}>School of Shuffle</a>

          </Menu.Item> */}
          <Menu.Item key="1">

		  	{/* <Tooltip placement="right" title={<span>Coming Soon</span>}>  */}
            {/* <a onClick={scrollShuffleToTop}>School of Shuffle</a> */}
			{/* </Tooltip> */}
            <a href="https://breezervividshuffle.in/finale-2021" target="_blank">Finale</a>

          </Menu.Item>
		  {/* <Menu.Item key="2">
			  <a href="https://insider.in/breezer-vivid-shuffle-op-open-dance-category-oct4-2021/event" target="_blank">Open Category</a>

		  </Menu.Item> */}
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
		// const isSafariDetected = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
		// const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
		// setIsSafari(isChrome)
    },[])
    return (
      <div className="blur_effect">
        {/* style={{position:props.activeScreen === 0 ? 'fixed':'relative'}} */}
       <nav className={headerbg?"NavbarItems activeHeader":"NavbarItems"}  >
            <div onClick={()=>{
				history.push('/')
				window.scrollTo(0,0);
				setSelectedPage(null);
			}} className="menu-logo">
			{/* <img alt={"logo"} onClick={()=>{
				history.push('/')
				window.scrollTo(0,0);
				setSelectedPage(null);
			}} src={logo} className="logo_style" style={{height:100}}/> */}

			<video className="logo_style"  style={{height:150}} autoPlay loop muted playsInline>
				
				<source src={logoWebm} type="video/webm"></source>:
				<source src={logoMov} type='video/mp4; codecs="hvc1"'></source>
            </video>
            </div>
            <div className="menu-icon" onClick={handleClick}>
               
             <i className={clicked?'fas fa-times':'fas fa-bars'}></i>
            </div>
           <div className="menu-list" >
             <div className={clicked?'nav-menu active':'nav-menu'}>
                <li><span className={selectedPage===0?"aboutNav-active":"aboutNav"} onClick = {scrollAboutToTop}>About</span></li>
                <li><span className={selectedPage===1?"categoriesNav-active":"categoriesNav"} onClick = {scrollCategoryToTop}>Finale</span></li>
                {/* <li><span className={selectedPage===2?"sosNav-active":"sosNav"} onClick= {scrollShuffleToTop}>School of Shuffle</span></li> */}
                <li><span className={selectedPage===2?"sosNav-active":"sosNav"} onClick={() => {history.push('/sos'); window.scrollTo(0,0); setClicked(false); setSelectedPage(2)}}>School of Shuffle</span></li>
                <li className={selectedPage===3 ? "voiceNav-active":"voiceNav"}><span  onClick={() => {history.push('/voiceofthestreets'); window.scrollTo(0,0); setClicked(false); setSelectedPage(3)}} >Voice Of The Streets</span></li>
                <li><span className={selectedPage===4 ? "faqNav-active":"faqNav"} onClick={() => {history.push('/faq');window.scrollTo(0,0);setClicked(false);setSelectedPage(4)}} >FAQs</span></li>
                <li className="navbar_register">
                    <Dropdown overlay={menu} trigger={['hover']}> 
                        <img alt={"Register"} src={Register} />
                    </Dropdown> 
                </li>
             </div>
           </div>
         
       </nav>
       </div>
    )
}


export default Navbar;

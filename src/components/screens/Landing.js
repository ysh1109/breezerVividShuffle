import React,{useEffect, Suspense} from 'react'
import './Landing.css'
import Banner from '../../Assets/Banner/banner-02.png'
import { Carousel } from 'react-bootstrap';
import bg_ticker from '../../Assets/backgrounds/bg_ticker-02.png'
import bg_about from '../../Assets/backgrounds/about_bg-03.png'
import bg_categories from '../../Assets/backgrounds/categories_bg-05.png'
import aboutIllustrations from '../../Assets/illustrations/About_Illustrations-04.svg'
import category1 from '../../Assets/categories/MainPage_-05.png'
import category2 from '../../Assets/categories/MainPage_-06.png'
import category3 from '../../Assets/categories/MainPage_-07.png'
import category4 from '../../Assets/categories/MainPage_-09.png'
import category5 from '../../Assets/categories/MainPage_-08.png'
import ambassador1 from '../../Assets/ambassdor/MainPage_jpgs-14.png'
import ambassador2 from '../../Assets/ambassdor/MainPage_jpgs-15.png'
import ambassador3 from '../../Assets/ambassdor/MainPage_jpgs-16.png'
import ambassador4 from '../../Assets/ambassdor/MainPage_jpgs-17.png'
import ambassador5 from '../../Assets/rajakumari.png'
import ambassador6 from '../../Assets/ambassdor/MainPage_jpgs-19.png'
import schoolOfShuffleBg from '../../Assets/backgrounds/schoolOfShuffle-08.png'
import schoolOfShuffleImg from '../../Assets/sos_title.svg'
import joinSquadbg from '../../Assets/backgrounds/join_squad.png'
import shuffleAmbassdorBg from '../../Assets/backgrounds/bg04-02.png'
import infobg from '../../Assets/backgrounds/last_bg-11.png'
import lastbg from '../../Assets/backgrounds/bg_last-02.png'
import submitButton from '../../Assets/illustrations/button_submit_1.svg'
import shoe from '../../Assets/illustrations/SVG/shoe.svg'
import facebook from '../../Assets/categories/facebook.svg'
import youtube01 from '../../Assets/categories/youtube01.svg'
import shuffleTitle from '../../Assets/illustrations/shuffle_title.svg'
import youtube from '../../Assets/categories/youtube.svg'
import AOS from 'aos';
import star from '../../Assets/illustrations/star_mainPage.svg'
import shuffle_title from '../../Assets/illustrations/shuffle_ambassador_pattern.svg'
import videobg from '../../Assets/ambassdor/videobg.mp4'
import {InstagramOutlined} from '@ant-design/icons'
import "aos/dist/aos.css"
const AboutSection = React.lazy(() => import('./About.js'));

function Landing(props) {
  useEffect(()=>{
    AOS.init({
        duration : 1500
      });

      const video = document.getElementById('video_bg')
  },[])
    return (
        <div >
            <div className="landing_banner">
                <video id="video_bg" playsinline="playsinline" controls style={{width:'100%'}} preload={true} muted autoPlay={true} loop="loop">
                     <source src={videobg} type="video/mp4"></source>
                </video>
            </div>
            <div style={{backgroundImage:`url(${bg_ticker})`}} className={"floatingTextContainer"}>
                <div className="marquee_container" width="100%" direction="left">
                    <div className="marquee_text" >
                        <img alt={"about_image"} src={star} style={{width:30,height:30,paddingRight:5}} fluid></img>
                          #LiveLifeInColour #VoiceOfTheStreets | Season 5 | School of Shuffle coming soon
                        <img alt={"about_image"} src={star} style={{width:30,height:30,paddingLeft:5}} fluid></img>
                     </div>
                   
                </div>
            </div>
			<Suspense fallback={()=><></>}>
				<AboutSection {...props}/>
			</Suspense>
            <div style={{backgroundImage:`url(${bg_ticker})`}} className={"floatingTextContainer"}>
                <div className="marquee_container" width="100%" direction="left">
                    <div className="marquee_text" >
                     <img alt={"about_image"} src={star} style={{width:30,height:30,paddingRight:5}} fluid></img>
                     #LiveLifeInColour #VoiceOfTheStreets | Season 5 | School of Shuffle coming soon
                    <img alt={"about_image"} src={star} style={{width:30,height:30,paddingLeft:5}} fluid></img>                   
                     </div>
                    
                     
                   
                </div>
            </div>


            <div id="category" className="landing_category" style={{backgroundImage: `url(${bg_categories})`}}>
                <div data-aos="flip-up" className="landing_category_title">
                    <h2>CATEGORIES</h2>
                    {/* <img src={shuffleTitle}></img> */}
                </div>
                <div className="landing_category_content">
                    <div className="landing_category_content_one">
                        <img alt={"about_image"} data-aos="zoom-in-up" className="about_image" src={category1} fluid></img>
                        <img alt={"about_image"} data-aos="zoom-in-up" className="about_image" src={category2} fluid></img>
                        <img alt={"about_image"} data-aos="zoom-in-up" className="about_image" src={category3} fluid></img>
                    </div>
                    <div className="landing_category_content_two">
                         <img alt={"about_image"} data-aos="zoom-in-up" className="about_image" src={category4} fluid></img>
                         <img alt={"about_image"} data-aos="zoom-in-up" className="about_image" src={category5} fluid></img>
                    </div>
                
                
                </div>
            </div>

            <div className="landing_shuffle" style={{backgroundImage: `url(${shuffleAmbassdorBg})`}}>
                <div data-aos="flip-up" className="landing_shuffle_title">
                <img src={shuffleTitle} className="shuffle_Title_main"></img> 
                     </div>
                <div className="landing_shuffle_content">
                    <div className="landing_category_content_one">
                        <img alt={"about_image_1"} data-aos="fade-up" className="about_image_1" src={ambassador5} fluid></img>
                        <img alt={"about_image_1"} data-aos="fade-up" className="about_image_2" src={ambassador6} fluid></img>
                        <img alt={"about_image_1"} data-aos="fade-up" className="about_image_1" src={ambassador1} fluid></img>
                    </div>
                    <div className="landing_category_content_two">
                    <img alt={"about_image_1"} data-aos="fade-up" className="about_image_1" src={ambassador2} fluid></img>
                        <img alt={"about_image_2"} data-aos="fade-up"  className="about_image_2" src={ambassador4} fluid></img>
                        <img alt={"about_image_1"} data-aos="fade-up" className="about_image_1" src={ambassador3} fluid></img>
                    </div>
                
                
                </div>
            </div>

            <div id="shuffle" className="landing_category" style={{backgroundImage: `url(${schoolOfShuffleBg})`}}>
                <img alt={"about_image_sos"} className="about_image_sos" src={schoolOfShuffleImg} fluid></img>
            </div>

            <div className="landing_squad" style={{backgroundImage: `url(${joinSquadbg})`}}>
                <div data-aos="flip-up" className="landing_squad_title">
                    <h2>JOIN THE SQUAD FOR EXCLUSIVE UPDATES</h2>
                </div>
                <div className="landing_squad_form">
                    <img alt={"shoe_image"} className="shoe_image" src={shoe} fluid></img>
                    <form onSubmit={{}}>
                        <input className="input_box" type="text" placeholder={"enter your email id here"} />
                    </form>
                    <img alt={"Submit"} className="submit_image_1" src={submitButton} fluid></img>
                </div>
                
            </div>

            <div className="landing_squad" style={{backgroundImage: `url(${infobg})`}}>
                <div data-aos="flip-up" className="landing_squad_title" >
                    <h2 style={{color:'white'}}>GOT QUESTIONS ON THE REGISTRATION PROCESS?</h2>
                </div>
                <div className="landing_info_form">
                    <h4>Email us <span>shuffle@oml.in</span></h4>
                    <h4>Or hit up on <span>+91 7774058785</span></h4>
                </div>
                
            </div>

            <div className="landing_last" style={{backgroundImage: `url(${lastbg})`,display:'flex'}}>
                <div data-aos="flip-up" className="landing_handle_title" >
                    <h2 style={{color:'#3a539c'}}>FOLLOW US ON </h2>
                    <InstagramOutlined style={{marginTop:-5,color:'#fff',fontSize:48}}/> <span className="last_handle">@brezeervividshuffle</span>
                </div>
                
            </div>
            <div className="landing_last_social">
            	<img alt={"Facebook"} className="social_media" src={facebook} fluid></img>
            	<img alt={"Youtube"} className="social_media" src={youtube} fluid></img>
            	<img alt={"Youtube"} className="social_media" src={youtube01} fluid></img>
            </div>

        </div>
    )
}

export default Landing

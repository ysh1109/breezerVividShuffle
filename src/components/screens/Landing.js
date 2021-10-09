import React,{useEffect, Suspense,useState} from 'react'
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
import ambassador1 from '../../Assets/ambassdor/ambassador3.png'
import ambassador2 from '../../Assets/ambassdor/ambassador4.png'
import ambassador3 from '../../Assets/ambassdor/ambassador6.png'
import ambassador4 from '../../Assets/ambassdor/ambassador5-02.png'
import ambassador5 from '../../Assets/ambassdor/ambassador1-01.png'
import ambassador6 from '../../Assets/ambassdor/ambassador2-02.png'
import schoolOfShuffleBg from '../../Assets/backgrounds/schoolOfShuffle-08.png'
import schoolOfShuffleImg from '../../Assets/sos_title.svg'
import sosbg from '../../Assets/sos/SOS_MainPg_Banner.png'
import sosbgMobile from '../../Assets/sos/SOS_MainPg_Mobile.png'
import joinSquadbg from '../../Assets/backgrounds/join_squad.png'
import shuffleAmbassdorBg from '../../Assets/backgrounds/bg04-02.png'
import infobg from '../../Assets/backgrounds/last_bg-11.png'
import lastbg from '../../Assets/backgrounds/bg_last-02.png'
import submitButton from '../../Assets/illustrations/button_submit_1.svg'
import shoe from '../../Assets/illustrations/SVG/shoe.svg'
import facebook from '../../Assets/categories/facebook.svg'
import youtube01 from '../../Assets/categories/youtube01.svg'
import shuffleTitle from '../../Assets/illustrations/shuffle_title.svg'
import spotify from '../../Assets/spotify.svg'
// import logoVideo from '../../Assets/2x/Logo_Flip.mov';
import AOS from 'aos';
import star from '../../Assets/illustrations/star_mainPage.svg'
import shuffle_title from '../../Assets/illustrations/shuffle_ambassador_pattern.svg'
import videobg from '../../Assets/ambassdor/videobg.mp4'
import volume from '../../Assets/volume.png'
import muted from '../../Assets/mute.png'
import {InstagramOutlined} from '@ant-design/icons'
import "aos/dist/aos.css"
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import { message, Button, Space } from 'antd';



const AboutSection = React.lazy(() => import('./About.js'));
function Landing(props) {

    const [data,setData] = useState({
        date:'',
        email:''
    })
    const [emailValue,setEmailValue] = useState('')
    const [isMuted,setIsMuted] = useState(true)
    const [screenSize,setScreenSize] = useState(window.innerWidth)
    const success = () => {
        message.success('Email has been Shared Successfully');
      };
      
    const error = (messager) => {
    message.error(messager);
    };
      
   const handleChange = async() => {
        var today = new Date().toLocaleString();
        // var dd = String(today.getDate()).padStart(2, '0');
        // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        // var yyyy = today.getFullYear();
        // today = mm + '/' + dd + '/' + yyyy;
       
        const todaySplit = today.split(',')
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const result = re.test(String(emailValue).toLowerCase());

        if(result) {
            
            try {
                const request = await fetch('https://v1.nocodeapi.com/omlbreezer/google_sheets/ewoTbCthkHYIpPCL?tabId=Sheet1',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify([[emailValue,todaySplit[0],todaySplit[1]]])
                
                })
                const response  = await request.json()
                if(response?.message === 'Successfully Inserted' ){
                    // console.log(response)
                    success()
                    setEmailValue('')
                }
           }
           catch(err) {
                error("Something Went Wrong")
                console.log(err)
           }
        }
        else {
            error('Please enter a valid Email Address !!!')
        }  
   }

   const screenWidth = () => {
        setScreenSize(window.innerWidth)
   }

  useEffect(()=>{
    AOS.init({
        duration : 1500
      });

      const video = document.getElementById('video_bg')
      window.addEventListener('resize',screenWidth)
  },[])
    return (
        <div >
            <div className="landing_banner">
                <video id="video_bg" playsInline="playsinline" style={{width:'100%'}} preload={true} muted={isMuted} autoPlay={true} loop="loop">
                     <source src={videobg} type="video/mp4"></source>
                </video>

                <div className="work-muted" onClick={()=>setIsMuted(()=>!isMuted)}>
                 <img src={isMuted?muted:volume} style={{height:'100%',width:'100%',objectFit:'contain'}}/>
                </div>
            </div>

            <div style={{backgroundImage:`url(${bg_ticker})`,marginTop:-5}}>
                <div className="client-slider">
                    <div className="client-slide-track">
                        <div className="client-slide">
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                        <p className="marquee_text">RSVP for League Qualifiers
REGISTER for BREEZER Vivid Shuffle OP</p>
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:10,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:10,marginTop:10}} fluid></img>
                        <p className="marquee_text">RSVP for League Qualifiers
REGISTER for BREEZER Vivid Shuffle OP</p>
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:10,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                        <p className="marquee_text">RSVP for League Qualifiers
REGISTER for BREEZER Vivid Shuffle OP</p>
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:10,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                        <p className="marquee_text">RSVP for League Qualifiers
REGISTER for BREEZER Vivid Shuffle OP</p>
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:10,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                        <p className="marquee_text">RSVP for League Qualifiers
REGISTER for BREEZER Vivid Shuffle OP</p>
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:10,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                        <p className="marquee_text">RSVP for League Qualifiers
REGISTER for BREEZER Vivid Shuffle OP</p>
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:10,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                        <p className="marquee_text">RSVP for League Qualifiers
REGISTER for BREEZER Vivid Shuffle OP</p>
                        <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:10,marginTop:10}} fluid></img>
                        </div>
                    </div>
                </div>
            </div>
			<Suspense fallback={()=><></>}>
				<AboutSection {...props}/>
			</Suspense>
            <div style={{backgroundImage:`url(${bg_ticker})`}}>
                <div className="client-slider">
                    <div className="client-slide-track">
                        <div className="client-slide">
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                                <p className="marquee_text">#LiveLifeInColour #VoiceOfTheStreets</p>
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:8,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                                <p className="marquee_text">#LiveLifeInColour #VoiceOfTheStreets</p>
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:8,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                                <p className="marquee_text">#LiveLifeInColour #VoiceOfTheStreets</p>
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:8,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                                <p className="marquee_text">#LiveLifeInColour #VoiceOfTheStreets</p>
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:8,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                                <p className="marquee_text">#LiveLifeInColour #VoiceOfTheStreets</p>
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:8,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                                <p className="marquee_text">#LiveLifeInColour #VoiceOfTheStreets</p>
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:8,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                                <p className="marquee_text">#LiveLifeInColour #VoiceOfTheStreets</p>
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:8,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                                <p className="marquee_text">#LiveLifeInColour #VoiceOfTheStreets</p>
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:8,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                                <p className="marquee_text">#LiveLifeInColour #VoiceOfTheStreets</p>
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:8,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                                <p className="marquee_text">#LiveLifeInColour #VoiceOfTheStreets</p>
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:8,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                                <p className="marquee_text">#LiveLifeInColour #VoiceOfTheStreets</p>
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:8,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                                <p className="marquee_text">#LiveLifeInColour #VoiceOfTheStreets</p>
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:8,marginTop:10}} fluid></img>
                        </div>
                        <div className="client-slide">
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginRight:8,marginTop:10}} fluid></img>
                                <p className="marquee_text">#LiveLifeInColour #VoiceOfTheStreets</p>
                            <img alt={"about_image"} src={star} style={{width:30,height:30,marginLeft:8,marginTop:10}} fluid></img>
                        </div>
                    </div>
                </div>
            </div>
            {/* <video  playsInline="playsinline" style={{width:'100%'}} preload={true} muted autoPlay={true} loop="loop">
                     <source src={logoVideo} type="video/mp4"></source>
                </video> */}

            <div id="category" className="landing_category" style={{backgroundImage: `url(${bg_categories})`}}>
                <div data-aos="flip-up" className="landing_category_title">
                    <h2>CATEGORIES</h2>
                </div>
                <div className="landing_category_content">
                    <div className="landing_category_content_one">
                        <a target="_blank" href="https://breezervividshuffle.in/Graffiti.html" className="about_image_div">
                            <img alt={"about_image"} data-aos="zoom-in-up" className="about_image" src={category1} fluid></img>
                        </a>
                        <a target="_blank" href="https://breezervividshuffle.in/Breaking.html" className="about_image_div">
                             <img alt={"about_image"} data-aos="zoom-in-up" className="about_image" src={category2} fluid></img>
                        </a>
                        <a target="_blank" href="https://breezervividshuffle.in/Rap.html" className="about_image_div">
                            <img alt={"about_image"} data-aos="zoom-in-up" className="about_image" src={category3} fluid></img>
                        </a>
                    </div>
                    <div className="landing_category_content_two">
                        <a target="_blank" href="https://breezervividshuffle.in/Showcase.html" className="about_image_div">
                            <img alt={"about_image"} data-aos="zoom-in-up" className="about_image" src={category4} fluid></img>
                        </a>
                        <a target="_blank" href="https://breezervividshuffle.in/Poppers.html" className="about_image_div">
                            <img alt={"about_image"} data-aos="zoom-in-up" className="about_image" src={category5} fluid></img>
                        </a>
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
                        <img alt={"about_image_1"} data-aos="fade-up" className="about_image_02" src={ambassador6} fluid></img>
                        <img alt={"about_image_1"} data-aos="fade-up" className="about_image_1" src={ambassador1} fluid></img>
                    </div>
                <div className="landing_category_content_two">
                    <img alt={"about_image_1"} data-aos="fade-up" className="about_image_1" src={ambassador2} fluid></img>
                    <img alt={"about_image_2"} data-aos="fade-up"  className="about_image_02" src={ambassador4} fluid></img>
                    <img alt={"about_image_1"} data-aos="fade-up" className="about_image_1" src={ambassador3} fluid></img>
                </div>
                </div>
            </div>

            <div id="shuffle" >
                {screenSize<768?<img alt={"about_image_sos"} className="about_image_sos" src={sosbgMobile} fluid></img>:
                <img alt={"about_image_sos"} className="about_image_sos" src={sosbg} fluid></img>}
            </div>
            {/* <div id="shuffle" style={{backgroundImage: `url(${schoolOfShuffleBg})`,display:'flex',backgroundSize:'cover'}} >
                {screenSize<768?<img alt={"about_image_sos"} className="about_image_sos" src={schoolOfShuffleImg} fluid></img>:
                <img alt={"about_image_sos"} className="about_image_sos" src={schoolOfShuffleImg} fluid></img>}
            </div> */}

            <div className="landing_squad" style={{backgroundImage: `url(${joinSquadbg})`}}>
                <div data-aos="flip-up" className="landing_squad_title">
                    <h2>JOIN THE SQUAD FOR EXCLUSIVE UPDATES</h2>
                </div>
                <div className="landing_squad_form">
                    <img alt={"shoe_image"} className="shoe_image" src={shoe} fluid></img>
                    <form  name="google-sheet">
                        <input className="input_box" type="text" placeholder={"enter your email id here"} value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} />
                    </form>
                    <img alt={"Submit"} onClick={()=>handleChange()} className="submit_image_1" src={submitButton} fluid></img>
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
                    <br></br>
                    <div className="center_social">
                    <InstagramFeed token="IGQVJYUFd4cW5WTEFCWGdQMFJOZAEZAYYXZAZAelFmdGJlRWpIa3dFUWtJYlNRdE0wV0RkV0UtSUV5ZA3lZAZADFnN3ZA5NGpYbTRpYnJIdjVtcmkwMk1KZATFqcVRSaTdFajctbWQxWnU3TkdiWDVabU04bmFGaAZDZD" counter="3"/>
                    </div>
                </div>
            </div>
            <div className="landing_last_social">
                <a href="https://www.facebook.com/breezervividshuffle/" target="_blank">
                    <img alt={"Facebook"} className="social_media" src={facebook} fluid>
                    </img>
                </a>
                <a href="https://open.spotify.com/user/25f6g1zp7uknzkpcsdobgyiyl?si=614fb9d2e1124683" target="_blank">
            	    <img alt={"Youtube"} className="social_media" src={spotify} fluid></img>
                </a>  
                <a href="https://www.youtube.com/channel/UCkvaGaPik8kNUlUTY_QLtuA" target="_blank">    
            	    <img alt={"Youtube"} className="social_media" src={youtube01} fluid></img>
                </a> 
            </div>
        </div>
    )
}

export default Landing

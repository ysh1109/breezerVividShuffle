import React from 'react';
import './Sos.css';
import Sos_bg from '../../Assets/sos/sos_bg.png';
import TitleImage from '../../Assets/VoiceOfTheStreetImages/title_vos_1.svg';
import sosList from '../../Assets/sosList.js';
import bottom_flames from '../../Assets/sos/SVG/bottom_fire.svg'
import facebook from '../../Assets/categories/facebook.svg'
import youtube01 from '../../Assets/categories/youtube01.svg'
import spotify from '../../Assets/spotify.svg'
import ball from '../../Assets/faqImages/ball.svg'
import bottle from '../../Assets/faqImages/bottle.svg'
import bottle_green from '../../Assets/faqImages/bottle_green.svg'
import cap from '../../Assets/faqImages/cap.svg'
import caste from '../../Assets/faqImages/caste.svg'
import shoe from '../../Assets/faqImages/shoe.svg'
import arrow from '../../Assets/sos/SVG/arrow.svg'
import book_seat_01 from '../../Assets/sos/SVG/book_seat_01.svg'
import book_seat_02 from '../../Assets/sos/SVG/book_seat_02.svg'
import book_seat_03 from '../../Assets/sos/SVG/book_seat_03.svg'
import book_seat_04 from '../../Assets/sos/SVG/book_seat_04.svg'
import book_seat_05 from '../../Assets/sos/SVG/book_seat_05.svg'
import book_seat_06 from '../../Assets/sos/SVG/book_seat_06.svg'
import BVS_SOS_IB_1 from '../../Assets/sos2/BVS-SOS-IB-1.png'
import BVS_SOS_IB_2 from '../../Assets/sos2/BVS-SOS-IB-2.png'
import BVS_SOS_IB_3 from '../../Assets/sos2/BVS-SOS-IB-3.png'
import BVS_SOS_IB_4 from '../../Assets/sos2/BVS-SOS-IB-4.png'
import BVS_SOS_IB_5 from '../../Assets/sos2/BVS-SOS-IB-5.png'
import BVS_SOS_IB_6 from '../../Assets/sos2/BVS-SOS-IB-6.png'
import cube_date from '../../Assets/sos2/date-head.svg'
import heading_sos from '../../Assets/sose3/about.svg'
import bookyourseats from '../../Assets/sose3/bookyourseats.svg'
import dateHead from '../../Assets/sose3/dateHead.svg'
import card1 from '../../Assets/sose3/cardJayman-02.svg'
import card2 from '../../Assets/sose3/bboy.svg'
import card3 from '../../Assets/sose3/cardMelvin.png'
import card4 from '../../Assets/sose3/cardKarma.png'
import card5 from '../../Assets/sose3/cardSkore.svg'
import card6 from '../../Assets/sose3/cardPopin.png'

import learn_hiphop from '../../Assets/sos/SVG/learn_hiphop.svg'
import rsvp_now from '../../Assets/sos/SVG/rsvp_now.svg'
import tape from '../../Assets/sos/SVG/tape.svg'
import edition from '../../Assets/sose3/edition3_1.svg'
import sos_logo from '../../Assets/sos/SOS_Logo_Final.png'


import AOS from 'aos';
import "aos/dist/aos.css"

const elementArr = {
	'tape':tape,
	'caste':caste,
	'arrow':arrow,

}
const VidContainer = props => {
	return (
		<div data-aos="zoom-in-up" className={"VidContainer"} style={{backgroundColor:props.backgroundColor}}>
				<div className="YoutubePlayer">
				<iframe frameBorder="0" src={props.videoID}></iframe>
			</div>
			<div style={{marginTop:20}}>
				<p>{props.vidTextOne}</p>
				<p>{props.vidTextTwo}</p>
			</div>
			{props.element?<div className="vos_elements" style={props.position} >
				<img  alt={"FAQ"} src={elementArr[props.elementName]} />
			</div>:''}
		</div>
	);
}

const Vids = props => {
	return sosList.map(item => {
		return <VidContainer key={item.videoID} backgroundColor={item.backgroundColor} videoID={item.videoID} vidTextOne={item.videoTextOne} vidTextTwo={item.videoTextTwo} element={item.element} elementName={item.elementName} position={item.position}/>
	})
	
}

export default props => {
	React.useEffect(() => {
		document.body.style.backgroundImage = `url('${Sos_bg}')`;
	 	document.body.style.backgroundRepeatY = 'repeat' 
		 AOS.init({
			duration : 1500
		 })
	},[]);
	return (
		<div className={"sos_container"}>
			<div data-aos="fade-up" className={"sos_flex"}>
				<img className="sos_title_logo" alt={"SOS"} src={sos_logo} />	
			</div>
			<div data-aos="fade-up" style={{margin:'auto'}}>
				<img className="sos_title_image" style={{width:250,marginTop:0,margin:'auto'}} alt={"SOS"} src={edition} />	
			</div>
			<div data-aos="fade-up" className={"sos_flex"}>
				<img className="sos_title_image" alt={"SOS"} src={heading_sos} />	
			</div>
			
			<div className="sos_text_div">
				<p data-aos="fade-up" className="sos_text">
					
					<p className="sos_text_blue" data-aos="fade-up" >
					 School Of Shuffle offers exclusive  101 workshops <br/> with hip-hop’s biggest names in art forms
						like popping, breaking,<br/> hip-hop dance forms, music production, rap, art and more.
					</p>
					<br></br>
					
					
				</p>
			</div>

			<div className="sos_rsvp_container">
				<div data-aos="fade-up" className={"sos_flex"}>
					<img className="sos_rsvp_logo" alt={"SOS"} src={bookyourseats} />	
				</div>
				<div data-aos="fade-up" className={"sos_flex"}>
					<img className="sos_rsvp_logo_1" alt={"SOS"} src={dateHead} />	
				</div>
				<div data-aos="fade-up" className={"sos_flex"}>
					<img className="sos_rsvp_logo_2" alt={"SOS"} src={learn_hiphop} />	
				</div>
				
			</div>

			<div className="sept_container_1">
				{/* <div data-aos="fade-up" className={"sos_flex"}>
					<img className="sos_sept_logo" alt={"SOS"} src={sept_title_17} />	
				</div> */}
				<div data-aos="fade-up" className={"sos_flex"}>
					<img className="sos_sept_performer_1" alt={"SOS"} src={card1} />	
				</div>
				<div data-aos="fade-up" className={"sos_flex"}>
					<a target="_blank" href="https://breezervividshuffle.in/jayman.html" className="about_image_div">
					<img className="sos_sept_submit" alt={"SOS"} src={book_seat_01} />	
					</a>
				</div>
				<div data-aos="fade-up" className={"sos_flex"}>
					<img className="sos_sept_performer" alt={"SOS"} src={card2} />	
				</div>
				<div data-aos="fade-up" className={"sos_flex"}>
				<a target="_blank" href="https://breezervividshuffle.in/bboy.html" className="about_image_div">
					
					<img className="sos_sept_submit" alt={"SOS"} src={book_seat_02} />	
				</a>
				</div>
				
			</div>

			<div className="sept_container_1" style={{marginTop:20}}>
				{/* <div data-aos="fade-up" className={"sos_flex"}>
					<img className="sos_sept_logo" alt={"SOS"} src={sept_title_18} />	
				</div> */}
				<div data-aos="fade-up" className={"sos_flex"}>
					<img className="sos_sept_performer" alt={"SOS"} src={card3} />	
				</div>
				<div data-aos="fade-up" className={"sos_flex"}>
					<a target="_blank" href="https://breezervividshuffle.in/melvin.html" className="about_image_div">
					
					<img className="sos_sept_submit" alt={"SOS"} src={book_seat_03} />	
					</a>
				</div>
				<div data-aos="fade-up" className={"sos_flex"}>
					<img className="sos_sept_performer" alt={"SOS"} src={card4} />	
				</div>
				<div data-aos="fade-up" className={"sos_flex"}>
					<a target="_blank" href="https://breezervividshuffle.in/karma.html" className="about_image_div">

						<img className="sos_sept_submit" alt={"SOS"} src={book_seat_04} />	
					</a>
				</div>
				
			</div>

			<div className="sept_container_1" style={{marginTop:30}}>
				{/* <div data-aos="fade-up"  className={"sos_flex"}>
					<img className="sos_sept_logo" alt={"SOS"} src={sept_title_19} />	
				</div> */}
				<div data-aos="fade-up" className={"sos_flex"}>
					<img className="sos_sept_performer" alt={"SOS"} src={card5} />	
				</div>
				<div data-aos="fade-up"  className={"sos_flex"}>
					<a target="_blank" href="https://breezervividshuffle.in/skore79.html" className="about_image_div">

					<img className="sos_sept_submit" alt={"SOS"} src={book_seat_03} />	
					</a>
				</div>
				<div data-aos="fade-up" className={"sos_flex"}>
					<img className="sos_sept_performer" alt={"SOS"} src={card6} />	
				</div>
				<div data-aos="fade-up" className={"sos_flex"}>
				<a target="_blank" href="https://breezervividshuffle.in/popinpete.html" className="about_image_div">
					
					<img className="sos_sept_submit" alt={"SOS"} src={book_seat_04} />	
				</a>	
				</div>
				
			</div>

			<div data-aos="fade-up" className="checkout_text">
				<p className="sos_check_text_blue">
				Check out all the dope scenes that went
				<br></br>
				down at School Of Shuffle previously!
				</p>
			</div>

			<div className={"vid_flex"} style={{marginTop:50}} >
				<Vids />
			</div>
			
			<div >
				
				
				<img className="footer_image" style={{marginLeft:-10}} src={bottom_flames}></img>
				
			</div>
			{/* <div style={{width:'100vw',backgroundColor:"linear-gradient(#e07b4b, #d9424b);",height:50,position:'relative',justifyContent:'center',display:'flex',marginTop:-5}}>
				<div className="landing_last_social_vos">
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
			</div> */}
		</div>
	)
}

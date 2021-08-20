import React from 'react';
import './VoiceOfTheStreets.css';
import Card1 from '../../Assets/faqImages/card1.svg';
import TitleImage from '../../Assets/VoiceOfTheStreetImages/title_vos_1.svg';
import VOTS_BG from '../../Assets/VoiceOfTheStreetImages/Voice_of_Streets_background.png';
import VideoList from '../../Assets/vidList.js';
import flames from '../../Assets/flames-01.png'
import facebook from '../../Assets/categories/facebook.svg'
import youtube01 from '../../Assets/categories/youtube01.svg'
import spotify from '../../Assets/spotify.svg'
import AOS from 'aos';
import "aos/dist/aos.css"

const VidContainer = props => {
	return (
		<div data-aos="zoom-in-up" className={"VidContainer"} style={{backgroundColor:props.backgroundColor}}>
			<iframe className="YoutubePlayer" frameBorder="0" src={props.videoID}></iframe>
			<p>{props.vidText}</p>
		</div>
	);
}

const Vids = props => {
	return VideoList.map(item => {
		return <VidContainer key={item.videoID} backgroundColor={item.backgroundColor} videoID={item.videoID} vidText={item.videoText}/>
	})
}

export default props => {
	React.useEffect(() => {
		document.body.style.backgroundImage = `url('${VOTS_BG}')`;
	 	document.body.style.backgroundRepeatY = 'repeat' 
		 AOS.init({
			duration : 1500
		 })
	},[]);
	return (
		<div className={"vots_container"}>
			<div className={"vots_flex"}>
				<img className="vots_title_image" alt={"FAQ"} src={TitleImage} />	
			</div>
			<div className="vots_text_div">
				<p className="vots_text">
				We’re celebrating 5 years at the house of Hip-Hop!<br/>
				BREEZER Vivid Shuffle has always provided a stage for the community to thrive.
				This year, we’re here to bring home the Voice Of The Streets and rep everything the culture stands for.
				</p>
			</div>
			<div className={"vid_flex"} >
				<Vids />
			</div>
			<div >
				
				
				<img className="footer_image" src={flames}></img>
				
			</div>
			<div style={{width:'100vw',backgroundColor:'#a45796',height:50,position:'relative',justifyContent:'center',display:'flex',marginTop:-5}}>
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
			</div>
		</div>
	)
}

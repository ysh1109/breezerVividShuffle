import React from 'react';
import './VoiceOfTheStreets.css';
import Card1 from '../../Assets/faqImages/card1.svg';
import TitleImage from '../../Assets/VoiceOfTheStreetImages/voice_of_street_title.svg';
import VOTS_BG from '../../Assets/VoiceOfTheStreetImages/Voice_of_Streets_background.png';
import VideoList from '../../Assets/vidList.js';

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
		/* document.body.style.background = '../../Assets/VoiceOfTheStreetImages/Voice_of_Streets_background.png' */
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
		</div>
	)
}

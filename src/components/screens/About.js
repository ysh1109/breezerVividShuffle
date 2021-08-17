import React from 'react';
import bg_about from '../../Assets/backgrounds/about_bg-03.png'
import aboutIllustrations from '../../Assets/illustrations/About_Illustrations-04.svg'

export default props => {
	React.useEffect(() => {
		if(!props.abt)
		{
			props.setAbt(document.getElementById("about").offsetTop);
			props.setCat(document.getElementById("category").offsetTop);
			props.setVots(document.getElementById("shuffle").offsetTop);
		}
	}, []);
	return (
       <div id="about" className="landing_about" style={{backgroundImage: `url(${bg_about})`}}>
           <div data-aos="flip-up" className="landing_about_title">
                    <h2>ABOUT</h2>
                </div>
                <div className="landing_about_content">
                    <div className="landing_about_content_text" >
                        <p data-aos="fade-right">
                     		BREEZER Vivid Shuffle steps into its 5th year as India’s biggest
    						hip-hop league. Through the seasons, we’ve provided a stage
    						for the community to showcase talent, build skill and share the
    						love for all things hip-hop. We’re coming to you alongside the
    						biggest names in the industry to find the country’s best Breakers
    						Poppers, Rappers, Grati Artists and Showcase Crews and form
    						the ultimate league. Get ready to be a part of performances, battles,
    						masterclasses, and the Shuffle fam. This is the home of hip-hop
    						where we rep the <span className="trendingText">#VoiceOfTheStreets</span> and <span className="trendingText">#LiveLifeInColour.</span>
                        </p>
                    </div>
                    <div className="landing_about_content_image" >
                     <img alt={"about_image"} className="about_image" data-aos="fade-left" src={aboutIllustrations} fluid></img>
                        
                    </div>
                </div>
		</div>
	)
}

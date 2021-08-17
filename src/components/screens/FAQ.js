import React from 'react';
import './FAQ.css';
import Card1 from '../../Assets/faqImages/card1-02.svg';
import Card2 from '../../Assets/faqImages/card2-02.svg';
import Card3 from '../../Assets/faqImages/card3.svg';
import Card4 from '../../Assets/faqImages/card4.svg';
import Card5 from '../../Assets/faqImages/card5.svg';
import Card6 from '../../Assets/faqImages/card6.svg';
import Card7 from '../../Assets/faqImages/card7-02.svg';
import Card8 from '../../Assets/faqImages/card8-02.svg';
import Card9 from '../../Assets/faqImages/card9-02.svg';
import Card10 from '../../Assets/faqImages/card10.svg';
import Card11 from '../../Assets/faqImages/card11.svg';
import Card12 from '../../Assets/faqImages/card12.svg';
import TitleImage from '../../Assets/faqImages/faq_title.svg';
import bottle from '../../Assets/faqImages/bottle.svg';
import FAQ_BG from '../../Assets/backgrounds/faq_background.png';

export default props => {
	React.useEffect(() => {
		document.body.style.backgroundImage = `url('${FAQ_BG}')`;
	},[]);
	return (
		<div className={"faq_container"}>
			<div className={"faq_flex"}>
				<img className="title_image" alt={"FAQ"} src={TitleImage} />	
			</div>
			<div className={"image_flex"} >
				<div style={{position:'relative'}}>
					<img  data-aos="zoom-in-up" className="random_faq" src={bottle} />	
					<img  data-aos="zoom-in-up" className="faq_image" alt={"faq1"} src={Card1} />	
				</div>
				<img data-aos="zoom-in-up" className="faq_image" alt={"faq1"} src={Card2} />	
				<img data-aos="zoom-in-up" className="faq_image" alt={"faq1"} src={Card3} />	
				<img data-aos="zoom-in-up" className="faq_image" alt={"faq1"} src={Card4} />	
				<img data-aos="zoom-in-up" className="faq_image" alt={"faq1"} src={Card5} />	
				<img data-aos="zoom-in-up" className="faq_image" alt={"faq1"} src={Card6} />	
				<img data-aos="zoom-in-up" className="faq_image" alt={"faq1"} src={Card7} />	
				<img data-aos="zoom-in-up" className="faq_image" alt={"faq1"} src={Card8} />	
				<img data-aos="zoom-in-up" className="faq_image" alt={"faq1"} src={Card9} />	
				<img data-aos="zoom-in-up" className="faq_image" alt={"faq1"} src={Card10} />	
				<img data-aos="zoom-in-up" className="faq_image" alt={"faq1"} src={Card11} />	
				<img data-aos="zoom-in-up" className="faq_image" alt={"faq1"} src={Card12} />	
			</div>
		</div>
	)
}

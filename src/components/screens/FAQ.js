import React from 'react';
import './FAQ.css';
import Card1 from '../../Assets/faqImages/card1.svg';
import Card2 from '../../Assets/faqImages/card2.svg';
import Card3 from '../../Assets/faqImages/card3.svg';
import Card4 from '../../Assets/faqImages/card4.svg';
import Card5 from '../../Assets/faqImages/card5.svg';
import Card6 from '../../Assets/faqImages/card6.svg';
import Card7 from '../../Assets/faqImages/card7.svg';
import Card8 from '../../Assets/faqImages/card8.svg';
import Card9 from '../../Assets/faqImages/card9.svg';
import Card10 from '../../Assets/faqImages/card10.svg';
import Card11 from '../../Assets/faqImages/card11.svg';
import Card12 from '../../Assets/faqImages/card12.svg';
import TitleImage from '../../Assets/faqImages/faq_title.svg';
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
				<img className="faq_image" alt={"faq1"} src={Card1} />	
				<img className="faq_image" alt={"faq1"} src={Card2} />	
				<img className="faq_image" alt={"faq1"} src={Card3} />	
				<img className="faq_image" alt={"faq1"} src={Card4} />	
				<img className="faq_image" alt={"faq1"} src={Card5} />	
				<img className="faq_image" alt={"faq1"} src={Card6} />	
				<img className="faq_image" alt={"faq1"} src={Card7} />	
				<img className="faq_image" alt={"faq1"} src={Card8} />	
				<img className="faq_image" alt={"faq1"} src={Card9} />	
				<img className="faq_image" alt={"faq1"} src={Card10} />	
				<img className="faq_image" alt={"faq1"} src={Card11} />	
				<img className="faq_image" alt={"faq1"} src={Card12} />	
			</div>
		</div>
	)
}

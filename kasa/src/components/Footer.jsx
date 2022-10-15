import '../scss/Footer.scss'
import logoFooter from '../images/logoFooter.png'

const Footer = () => {
	return (
		<div className='footer'>
                  <div className='footer__text__container'>
                        <img src={logoFooter} alt="Paysage" />
                        <div className='text__footer'>2020. All rights reserved</div>
                  </div>
            </div>
	);
};

export default Footer;
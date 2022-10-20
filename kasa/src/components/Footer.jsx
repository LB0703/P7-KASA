import React from "react";
import '../scss/layout/_footer.scss'
import logoFooter from '../images/logoFooter.png'

const Footer = () => {
	return (
		<div className='footer'>
                  <div className='footer__container'>
                        <img className='footer__logo' src={logoFooter} alt="Paysage" />
                        <div className='footer__text'> © 2020. All rights reserved</div>
                  </div>
            </div>
	);
};

export default Footer;
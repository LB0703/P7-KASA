import React from "react";
import '../scss/Banner.scss'
import homeBanner from '../images/BannerHome.png'

const Banner = () => {
	return (
		<div className='banner'>
                  <div className='banner__container'>
                        <img className='banner__img'src={homeBanner} alt="Paysage" />
                        <div className='banner__text'>Chez vous, partout et ailleurs</div>
                  </div>
            </div>
	);
};

export default Banner;
import React from "react";
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
//import '../styles/layout/_header.scss'



const Header = () => {
	return (
		<header>
			<div className='header__item'>
				<img className='header__logo'src={logo} alt='logo kasa'></img>
			
			<nav className='header__nav'>
				<NavLink to="/" className="header__Accueil" >Accueil</NavLink>
				<NavLink to="/about-us" className="header__Apropos">A propos</NavLink>
			</nav>
			</div>
		</header>
	);
};

export default Header;
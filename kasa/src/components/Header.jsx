import React from "react";
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import '../scss/Header.scss'



const Header = () => {
	return (
		<header>
			<div className='header__logo'>
				<img src={logo} alt='logo kasa'></img>
			</div>
			<nav className='header__nav'>
				<NavLink to="/" className="header__Accueil" >Accueil</NavLink>
				<NavLink to="/about-us" className="header__Apropos">A propos</NavLink>
			</nav>
		</header>
	);
};

export default Header;
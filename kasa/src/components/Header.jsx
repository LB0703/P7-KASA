import React from "react";
import { NavLink, Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Header = () => {
	return (
		<header>
			<div className='header__item'>
				<Link to="/">
				<img className='header__logo'src={logo} alt='logo kasa'></img>
				</Link>
			
				<div className='header__nav'>
					<nav>
						<ul>
							<NavLink 
								to="/" 
								className={(link) => (link.isActive ? "link-active" : " ")}
								end 
								>
								<li>Accueil</li>
							</NavLink>
							<NavLink 
								to="/about-us" 
								className={(link) =>(link.isActive ? "link-active" : " ")}
								>
								<li>À propos</li>
							</NavLink>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
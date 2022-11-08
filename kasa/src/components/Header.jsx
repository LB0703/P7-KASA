import React from "react";
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'

const Header = () => {
	return (
		<header>
			<div className='header__item'>
				<img className='header__logo'src={logo} alt='logo kasa'></img>
			
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
								<li>A propos</li>
							</NavLink>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
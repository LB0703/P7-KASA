import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'



const Header = () => {
	return (
		<header>
			<div className='logo'>
				<img src={logo} alt='logo kasa'></img>
			</div>
			<nav>
				<NavLink to="/">Accueil</NavLink>
				<NavLink to="/about-us">A propos</NavLink>
			</nav>
		</header>
	);
};

export default Header;
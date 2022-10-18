import React from "react";
import { NavLink} from 'react-router-dom';
import "../scss/Error.scss"

const Error404 = () => {
	return (
		<div>
			<div className="error">
			<h1 className="error__number">404</h1>
			<p className="error__text">Oups! La page que vous demndez n'existe pas.</p>
			<NavLink className="error__link" to="/Home">Retourner sur la page d'acccueil</NavLink>
		</div>
		</div>
	);
};

export default Error404;
import React from "react";
import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<div>
			<div className="error">
				<h1 className="error__number">404</h1>
				<p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
				<Link className="error__link" 
				to="/">Retourner sur la page d'acccueil
				</Link>
			</div>
		</div>
	);
};

export default Error404;
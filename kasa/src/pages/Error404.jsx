import { NavLink} from 'react-router-dom';

const Error404 = () => {
	return (
		<div>
			<h1 className="error">404</h1>
			<p>Oups! La page que vous demndez n'existe pas.</p>
			<NavLink to="/Home">Retourner sur la page d'acccueil</NavLink>
		</div>
	);
};

export default Error404;
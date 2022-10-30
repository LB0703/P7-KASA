
import React from "react";
//import'../styles/components/_gallery.scss'

const Card = ({cover, title}) => {
	return (
		<article className="card__item">
			
			<img className='card__img' src={cover} alt="Photos des appartements" />
			<div className="card__title">
			<h1>{title}</h1>
			</div>
		</article>
	);
};

export default Card;
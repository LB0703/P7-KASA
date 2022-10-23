
import React from "react";
//import'../styles/components/_gallery.scss'

const Card = ({cover, title}) => {
	return (
		<article className="card__item">
			<div className="card__box">
			<img className='card__img' src={cover} alt="Photos des appartements" />
			<div className="card__title">
			<h1>{title}</h1>
			</div>
			</div>
		</article>
	);
};

export default Card;
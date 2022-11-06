import React from "react";

const Card = ({cover, title}) => {
	return (
		<article className="card__item">
			<img className='card__img' src={cover} alt="Photos des appartements" />
			<div className="card__titleContainer">
				<h1 className="card__title">{title}</h1>
			</div>
		</article>
	);
};

export default Card;
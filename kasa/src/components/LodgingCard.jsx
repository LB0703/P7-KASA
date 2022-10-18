import React from "react";
import'../scss/LodgingCard.scss'

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


// const Card = ({cover, title}) => {
// 	return (
// 		<section className='card'>
// 		<article className="card__containaire">
//                   <div className='card__item'>
// 				<img className='card__img' src={cover} alt="Photos des appartements" />
// 			<div className='card__name'>
// 				<h1>{title}</h1>
// 			</div>
//                   </div>
// 		</article>
// 		</section>
// 	);
// };
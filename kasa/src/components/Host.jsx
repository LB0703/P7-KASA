import React from "react";

const Host = (props) => {
	return (
		<div className="host__container">
			<div className="host__box">
			<p className="host__name">{props.name}</p>
			<img className="host__img "src={props.picture} alt="{host.name}" />
			</div>
		</div>
	);
};

export default Host;


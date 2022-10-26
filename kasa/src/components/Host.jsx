import React from "react";








const Host = (props) => {
	return (
		<div className="host__container">
                  <p classNam="host__name">{props.name}</p>
                  <img  className="host__img "src={props.picture} alt="{host.name}" />
            </div>
	);
};

export default Host;


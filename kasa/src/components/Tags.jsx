import React from "react";


const Tags = (props) => {
	return (
		<ul className="tags__list">
                  {props.tag.map((tag, index) =>
                        <li key={index}>{tag}</li>
                  )}
            </ul>
	);
};

export default Tags;
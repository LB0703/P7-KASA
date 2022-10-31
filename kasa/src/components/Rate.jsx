import React from "react";
import fullStar from "../images/fullStar.png";
import emptyStar from "../images/emptyStar.png";
//import { useState } from "react";

const Rate = ( {rating} ) => {
      const star = [1, 2, 3, 4, 5];

     
  return (     
<div className="rate__container">
            {star.map((stars, index) =>
                  rating >= stars
                  ? (
                        <img 
                        key={index}
                        className="rate__star" 
                        src={fullStar} 
                        alt="Etoile pleine" 
                        />
                        
                  ) : (
                        <img 
                        key={index}
                        className="rate__star" 
                        src={emptyStar} 
                        alt="Etoile vide" 
                        />
                        
                  )
           ) }
</div>
  )
};

export default Rate;



// for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//             stars.push(
//             <img src={fullStar} 
//             alt="full-star" 
//             key={i} 
//             />);
//       } else {
//             stars.push(
//             <img src={emptyStar} 
//             alt="empty-star" 
//             key={i} 
//             />);
//       }
// }

// return <div className="rate">{stars}</div>;
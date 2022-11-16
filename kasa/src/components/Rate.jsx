import React from "react";
import fullStar from "../images/fullStar.png";
import emptyStar from "../images/emptyStar.png";

const Rate = ( {rating} ) => {
      const star = [1, 2, 3, 4, 5];

      return (     
            <div className="rate__container">
                  {star.map((rate, index) =>
                        rating >= rate
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



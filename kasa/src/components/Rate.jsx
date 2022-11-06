import React from "react";
import fullS from "../images/fullS.png";
import emptyS from "../images/emptyS.png";
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
                                    src={fullS} 
                                    alt="Etoile pleine" 
                                    />
                        ) : (
                                    <img 
                                    key={index}
                                    className="rate__star" 
                                    src={emptyS} 
                                    alt="Etoile vide" 
                                    />
                        
                        )
                  ) }
            </div>
      )
};

export default Rate;



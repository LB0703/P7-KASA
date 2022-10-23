import React, { useState} from "react";
//import'../styles/components/_collapse.scss'

import arrowTop from "../images/arrowTop.png"
import arrowBottom from "../images/arrowBottom.png"


const Collapse = (props) => {

      const [up, setUp ] = useState(false)

      const arrow = () => {
            setUp(!up);
      };


      return ( 
      <div className="collapse__container">
            <div className="collapse__containerBtn" onClick={arrow}>
                  <div className="collapse__btn">
                        <p className="collapse__title">{props.title}</p>{''}
                  </div>
                  {up ? (
                        <img className="collapse__arrow" src={arrowTop} alt="Flèche direction haut" />
                  ) : (
                        <img className="collapse__arrow" src={arrowBottom} alt="Flèche direction bas" />
                  )}
            </div>
      
            {up && <div className="collapse__content"> {props.content} </div>}
            </div>
      ) 
};

export default Collapse;
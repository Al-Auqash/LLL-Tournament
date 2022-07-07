import React from "react";
import "../Homepage.css";

const Card = (props) => {
   return (
         <div className="card">
            <img className="cardImage" src={props.src}></img>
            <h2>{props.title}</h2>
            <p>
               {props.description}
            </p>
         </div>
   );
};

export default Card;

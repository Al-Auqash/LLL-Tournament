import React from "react";
import "../Homepage.css";

const Card = (props) => {
   return (
      <div className="card cs-card p-4 text-center">
         <img src={props.src} width="100"></img>
         <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p className="card-name">{props.description}</p>
         </div>
      </div>
   );
};

export default Card;

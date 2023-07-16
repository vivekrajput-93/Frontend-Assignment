import React from "react";

const AboutCard = (props) => {
  return (
    <div>
      <div className="card" >
      <h2 style={{color: "var(--primary)"}}>{props.title}</h2>
      
      </div>
    </div>
  );
};

export default AboutCard;

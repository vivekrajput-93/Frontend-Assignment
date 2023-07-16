import React from "react";
import "../CSS/Home.css";
import search from "../images/search.jpg"

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        {/* Left side */}
        <div className="left">
          <h2>Hola, People!</h2>
          <p>This is a Home Page of site where you can Small sites like ToDoList, Movie App and Shopping Cart</p>
          <p>I hope you enjoy it and please provide the feedback.</p>
        </div>
        {/* Right side */}
        <div className="right">
          <div className="img-container">
            <img id="img" src={search} alt="Hero" />
          </div>
        </div>
        
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;

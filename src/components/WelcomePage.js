import React from "react";
import { Route, Link} from "react-router-dom"; 
import App from "../App"


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <ul className="navBar">
        <Route path="/" component={WelcomePage}/>
        <Route path="../App.js" component={App}/>
        <li><Link to="../App.js">Character Page</Link></li>
      </ul>
    </section>
  );
}

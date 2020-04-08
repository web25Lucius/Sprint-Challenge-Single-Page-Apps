import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import {Route, Link} from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";



export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <ul className="navBar">
        <Route path="./components/WelcomePage.js" component={WelcomePage}/>
        <Route path="/" component={App}/>
        <li><Link to="./components/WelcomePage.js">Home</Link></li>
      </ul>
      <CharacterList/>
    </main>
  );
}

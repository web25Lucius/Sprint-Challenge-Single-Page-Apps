import React from "react";




export default function CharacterCard(props) {
  return (
    <span className="cardW">
      <h1>{props.name}</h1>
      <img src={props.image} alt="avatar"/>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
    </span>
      

  )

}

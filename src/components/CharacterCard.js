import React from "react";
import {Card as StyledCard} from '@material-ui/core'
import { flexbox } from '@material-ui/system';

const StyleCard = {
  color: '#A0FD29',
  fontWeight: 'bold',
  padding: 35, 
  backgroundColor: 'black', 
  display: 'flex', 
  flexWrap: 'wrap', 
  flexDirection: 'column',
  width: 300, 
  margin: 20, 
  alignItems: 'center'


}

export default function CharacterCard(props) {
  return (
    <span className="cardW">
      <StyledCard style={{...StyleCard}}>
      <h1>{props.name}</h1>
      <img src={props.image} alt="avatar"/>
      <br></br>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      </StyledCard>
    </span>
      

  )

}

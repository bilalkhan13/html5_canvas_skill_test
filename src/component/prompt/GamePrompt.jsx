import React, {useState} from 'react'
import { useEffect } from 'react'
import './gamePrompt.css'

export default function GamePrompt({status, userChoice, compChoice}) {
  const options = ['rock', 'paper', 'scissors'];
  

  const handleClick=(userValue)=>{
    userChoice(userValue);
    compChoice(options[Math.floor(Math.random() * options.length)]);
    
    status(false);
  }


  return (
    <div className='game__prompt'>
      <span className='close' onClick={()=>{status(false)}}>x</span>
      <h2 className='prompt__title'>Choose any one option!</h2>
      <div className='option__list'>
        <button className="option fas fa-hand-rock" id="rock" onClick={()=>{handleClick('rock')}}></button>
        <button className="option fas fa-hand-paper" id="paper" onClick={()=>{handleClick('paper')}}></button>
        <button className="option fas fa-hand-scissors" id="scissors" onClick={()=>{handleClick('scissors')}}></button>
      </div>
    </div>
  )
}

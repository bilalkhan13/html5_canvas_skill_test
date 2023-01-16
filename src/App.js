import { useEffect, useState } from 'react';
import './App.css';
import GamePrompt from './component/prompt/GamePrompt';
import helper from './helper/helper';

function App() {
  const [showPrompt, setShowPrompt] = useState(true);
  const [userSelection, setUserSelection] = useState('');
  const [compSelection, setCompSelection] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [winner, setWinner] = useState('')

  useEffect(()=>{
    console.log(userSelection, compSelection)
    let score = helper.runGame(userSelection, compSelection);
    if(score==="user"){
      setUserScore((prev)=> prev+1)
      if (userScore === 2){
        setWinner('User')
      }    } else if(score==="computer") {
      setCompScore((prev)=> prev+1)
      if(compScore === 2){
        setWinner('Computer')
      }    }
   
  },[userSelection])

  
  return (
    <>
      {showPrompt && <GamePrompt status={setShowPrompt} userChoice={setUserSelection} compChoice={setCompSelection}/>}
      {winner==='' &&  <button className='again' onClick={()=>{setShowPrompt(true)}}>Again</button>
}
      <p>User Score: {userScore}</p>
      <p>Comp Score: {compScore}</p>
      <canvas className="game__canvas">
      </canvas>
    </>

  );
}

export default App;

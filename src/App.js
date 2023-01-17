import { useEffect, useState } from "react";
import helper from "./helper/helper";
import Canvas from "./component/Canvas";

function App() {
  const [userSelection, setUserSelection] = useState("");
  const [compSelection, setCompSelection] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    console.log(userSelection, compSelection);
    let score = helper.runGame(userSelection, compSelection);
    if (score === "user") {
      setUserScore((prev) => prev + 1);
      if (userScore === 2) {
        setWinner("User");
      }
    } else if (score === "computer") {
      setCompScore((prev) => prev + 1);
      if (compScore === 2) {
        setWinner("Computer");
      }
    }
  }, [userSelection]);

  const draw = (context) => {
    context.fillStyle = "rgb(200, 0, 0)";
    context.fillRect(10, 10, 50, 50);

    context.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.fillRect(30, 30, 50, 50);
  };

  return (
    <>
      <div className="game__container">
        <div className="canvas__container">
          <Canvas
            draw={draw}
            height={100}
            width={100}
            userChoice={setUserSelection}
            compChoice={setCompSelection}
          />
        </div>
        {winner === "" ? (
          ""
        ) : (
          //
          <div className="alert__msg">
            <p className="win__msg">
              <span>Congratulations!</span> {winner} Wins
            </p>
            <button
              className="again"
              onClick={() => {
                setWinner("");
                setUserScore(0);
                setCompScore(0);
              }}
            >
              Challenge Again
            </button>
          </div>
        )}
        <button
          onClick={() => {
            setWinner("");
            setUserScore(0);
            setCompScore(0);
          }}
          className="restart__game"
        >
          Restart Game
        </button>
        <p>User Score: {userScore}</p>
        <p>Comp Score: {compScore}</p>
      </div>
    </>
  );
}

export default App;
